String.prototype.replaceAll = function (search, replacement) {
  var tmp = this;
  tmp = tmp.split(search).join(replacement);
  return tmp
};

function to_python_code(keymap) {
  // full python code, return at end of this function
  var python_str = "keymap = {\n";

  // loop over each coordinate
  for (var rows = 0; rows < 8; rows++) {
    for (var cols = 0; cols < 4; cols++) {
      // this row of python code, append to python_str and end of iteration
      var python_row_str = "";

      // this python key e.g. `(0,0): `
      var python_key_str = '(' + cols + ',' + rows + '): ';

      // this js key for lookup in the js keymap
      var js_key_str = '(' + cols + ',' + rows + ')';

      //console.log(python_key_str);
      if (keymap[js_key_str] !== undefined) {
        // we have a definition for this coordinate

        // put color and type into python value str
        var python_value_str = "(" + keymap[js_key_str]['color'] + ", " + keymap[js_key_str]['type'] + ", ";

        var python_keys_value;
        // build the keys tuple
        if (keymap[js_key_str]['keys'].length > 1) {
          python_keys_value = "(";
          for (var i = 0; i < keymap[js_key_str]['keys'].length; i++) {
            python_keys_value += keymap[js_key_str]['keys'][i] + ", ";
          }
          // remove extra comma and space
          python_keys_value = python_keys_value.substring(0, python_keys_value.length - 2);
          python_keys_value += ")";
        } else {
          if(keymap[js_key_str]['type'] == "KEY"){
            python_keys_value = "(" + keymap[js_key_str]['keys'][0] + ",)";
          }else if (keymap[js_key_str]['type'] == "MEDIA"){
            python_keys_value = keymap[js_key_str]['keys'][0];
          }

        }
        python_value_str += python_keys_value + ")";
        python_row_str = "    " + python_key_str + python_value_str;

        // add comma or closing bracket
        if (rows === 7 && cols === 3) {
          python_row_str += "}"
        } else {
          python_row_str += ","
        }

        // add comment
        if (keymap[js_key_str]["comment"] !== undefined) {
          python_row_str += "  # " + keymap[js_key_str]["comment"] + " \n";
        } else {
          python_row_str += " \n";
        }
      } else {
        // no definition for this coordinate
        python_row_str = "    # intentional blank button \n"
      }

      python_str += python_row_str;
    }
    python_str += "\n";
  }

  return python_str;
}

function to_js_obj(python_dict) {
  // full js obj return at end of function
  var js_obj = {};

  // list of rows
  var rows = python_dict.split("\n");

  // loop over each row
  for (var i = 1; i < rows.length; i++) {
    // current row, minus the 4 spaces at the beginning
    var this_row = rows[i].substring(4);

    if (this_row.length > 0) { // row is not blank
      if (this_row.charAt(0) != "#") { // row is not comment only
        // key from current row
        var this_key = this_row.split(":")[0];
        // object from current row add to js_obj before return
        var this_obj = {};
        // value string from current row
        var this_val_str = this_row.split(":")[1].substring(1);
        // color value add to this_obj before return
        var this_color = "";
        // type value add to this_obj before return
        var this_type = "";
        // comment value. if not null add to this_obj before return
        var this_comment = null;
        // temp string to manipulate
        var tmp = "";
        if (this_val_str.startsWith("(0x")) { // color is hex
          // take the first 8 characters after the open paren
          this_color = this_val_str.substring(1, 9);
          // remove color from temp
          tmp = (this_val_str.substring(10));
        } else if (this_val_str.startsWith("((")) { // color is RGB
          // take characters up to and including the close paren
          this_color = this_val_str.substring(1, this_val_str.indexOf(")") + 1);
          // remove color from temp
          tmp = this_val_str.substring(this_val_str.indexOf(")") + 2);
        }
        // take everything before the first comma and strip spaces
        this_type = tmp.split(",")[0].replace(" ", "");
        // remove everything up to the space after the first comma from temp
        tmp = tmp.substring(tmp.indexOf(",") + 2);

        if (tmp.indexOf("#") > 0) { // there is a comment
          // take everything after the octothorpe
          this_comment = tmp.substring(tmp.indexOf("#") + 1);
          // remove comment from temp
          tmp = tmp.substring(0, tmp.indexOf("#"));
        }
        // strip all whitespace, parens, and closing bracket
        tmp = tmp.replaceAll(" ", "");
        tmp = tmp.replaceAll("(", "");
        tmp = tmp.replaceAll(")", "");
        tmp = tmp.replaceAll("}", "");

        //console.log("|" + tmp + "|");
        // strip trailing commas
        while (tmp.endsWith(",")) {
          tmp = tmp.substring(0, tmp.length - 1);
        }
        //console.log("|" + tmp + "|");
        // at this point tmp contains only the values for keys separated by commas

        // build current row object
        this_obj["color"] = this_color;
        this_obj["screen_color"] = get_brightened_color(this_color);
        this_obj["type"] = this_type;
        this_obj["keys"] = tmp.split(",");
        if (this_comment != null) {
          this_obj["comment"] = this_comment;
        }

        // add current row object to full object
        js_obj[this_key] = this_obj;
      }
    }
  }
  return js_obj;
}

