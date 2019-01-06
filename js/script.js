//console.log(to_python_code(original_keymap));
//console.log(original_keymap_python_str);
//console.log(to_js_obj(original_keymap_python_str));
//console.log(to_js_obj(original_keymap_python_str));


var $grid_holder = $(".grid_holder");

var data_obj = {};
var edited_data_obj = Object.create(data_obj);

var selected_coords = "";

build_grid_from_data_obj(data_obj);


$("#color_input").spectrum({
  change: function (color) {
    //edited_data_obj[selected_coords]["color"] = color.toHexString().replace("#", "0x");
    console.log(color.toHexString());

    edit_data(selected_coords, 'color', color.toHexString().replace("#", "0x"));
    var brightened = get_brightened_color(color.toHexString().replace("#", "0x"));
    edit_data(selected_coords, 'screen_color', brightened);
    console.log($("[data-coordinates='" + selected_coords + "']"));
    $("[data-coordinates='" + selected_coords + "']").css("background-color", brightened);
    $("[data-coordinates='" + selected_coords + "']").removeClass("empty_config");
  }
});

$("#export_btn").click(function () {
  $("#export_modal").toggleClass("is-active");
  $("#export_txt").val(to_python_code(edited_data_obj));
  $("#export_txt").select();

});

$("#new_key_btn").click(function () {
  var $new_key_item = $("#key_input_clone").clone();
  $new_key_item.attr("id", "");
  $new_key_item.css("display", "inline-flex");
  $new_key_item.find("input").val($("#new_key_input").val());
  $("#keys_list").append($new_key_item);
  $(".remove_btn").click(function () {
    $(this).parent().parent().remove();
    edited_data_obj[selected_coords]['keys'] = build_keys_list();
  });
  //edited_data_obj[selected_coords]['keys'] = build_keys_list();
  edit_data(selected_coords, 'keys', build_keys_list());

  if ($("#type_input").val() == "") {
    if ($("#new_key_input").val().indexOf("Keycode") >= 0) {
      $("#type_input").val("KEY");
      $("#type_input").blur();
    } else if ($("#new_key_input").val().indexOf("ConsumerControlCode") >= 0) {
      $("#type_input").val("MEDIA");
      $("#type_input").blur();
    }
  }
});

$("#type_input").blur(function () {
  //console.log("type change");
  edit_data(selected_coords, 'type', $("#type_input").val());
});

$("#comment_input").blur(function () {
  //console.log("type change");
  edit_data(selected_coords, 'comment', $("#comment_input").val());
});

$("#export_select_all_btn").click(function () {
  $("#export_txt").select();
});

$("#import_btn").click(function () {
  $(".grid_holder").empty();
  data_obj = to_js_obj($("#import_txt").val());
  edited_data_obj = Object.create(data_obj);
  build_grid_from_data_obj(edited_data_obj);
  $("#import_modal").removeClass("is-active");
  console.log(edited_data_obj);
});

$("#clear_all_btn").click(function () {
  $(".grid_holder").empty();
  data_obj = {};
  edited_data_obj = Object.create(data_obj);
  build_grid_from_data_obj(edited_data_obj);
});

$("#sample_btn").click(function () {
  $(".grid_holder").empty();
  data_obj = to_js_obj(original_keymap_python_str);
  edited_data_obj = Object.create(data_obj);
  build_grid_from_data_obj(edited_data_obj);
});

function setup_trellis_btn_click(){
  $(".trellis_button").click(function () {
  selected_coords = $(this).text();
  console.log(edited_data_obj);
  console.log(edited_data_obj[$(this).text()]);
  if (edited_data_obj[$(this).text()] != undefined) {

    $("#color_input").spectrum("set", edited_data_obj[$(this).text()]['color'].replace("0x", ""));
    //$("#color_input").spectrum("set", $(this).css("background-color"));
    if (edited_data_obj[$(this).text()]['comment'] != undefined) {
      $("#comment_input").val(edited_data_obj[$(this).text()]['comment']);
    } else {
      $("#comment_input").val("");
    }
    console.log($("#type_input"));
    $("#type_input").val(edited_data_obj[$(this).text()]["type"]);

    $("#keys_list").empty();
    for (var i = 0; i < edited_data_obj[$(this).text()]["keys"].length; i++) {
      var $new_key_item = $("#key_input_clone").clone();
      $new_key_item.attr("id", "");
      $new_key_item.css("display", "inline-flex");
      $new_key_item.find("input").val(edited_data_obj[$(this).text()]["keys"][i]);
      $("#keys_list").append($new_key_item);

    }

    $(".remove_btn").click(function () {
      $(this).parent().parent().remove();
      edited_data_obj[selected_coords]['keys'] = build_keys_list();
    });

    $(".key_input input").blur(function () {
      //console.log("blur");
      edited_data_obj[selected_coords]['keys'] = build_keys_list();
    });

  } else {
    $("#keys_list").empty();
    $("#type_input").val("");
    $("#color_input").spectrum("set", "#FFFFFF");
    $("#comment_input").val("");
  }
});

}


function edit_data(coords, field, value) {
  if (edited_data_obj[coords] == undefined) {
    //console.log("doesn't exist");
    edited_data_obj[coords] = {}
  }
  edited_data_obj[coords][field] = value;
}
function build_keys_list() {
  var key_inputs = $("#keys_list :input");
  var keys_list = [];
  for (var i = 0; i < key_inputs.length; i++) {
    console.log($(key_inputs[i]).val());
    keys_list.push($(key_inputs[i]).val());
  }
  return keys_list;
}
function build_grid_from_data_obj(data_obj) {
  for (var rows = 0; rows < 8; rows++) {
    var $new_row_div = $('<div class="row">');
    for (var cols = 0; cols < 4; cols++) {
      var $new_btn = $("<button>");
      $new_btn.text("(" + cols + "," + rows + ")");
      $new_btn.addClass("button");
      $new_btn.addClass("trellis_button");

      var this_key = "(" + cols + "," + rows + ")";
      $new_btn.attr("data-coordinates", this_key);
      if (data_obj[this_key] != undefined) {
        $new_btn.css("background-color", data_obj[this_key]["screen_color"]);
        /*if (data_obj[this_key]["screen_color"].startsWith("0x")) {
         var brightened = ColorLuminance(data_obj[this_key]["color"].replace("0x", ""), 10.0);
         //$new_btn.css("background-color", brightened);
         $new_btn.css("background-color", data_obj[this_key]["color"].replace("0x", "#"));
         } else if (data_obj[this_key]["color"].startsWith("(")) {
         var color = data_obj[this_key]["color"].replace("(", "").replace(")", "");
         var brightened = ColorLuminance(rgbToHex(color.split(",")[0], color.split(",")[1], color.split(",")[2]), 10.8);
         var same = ColorLuminance(rgbToHex(color.split(",")[0], color.split(",")[1], color.split(",")[2]), 0.0);
         //$new_btn.css("background-color", brightened);
         $new_btn.css("background-color", same);
         }*/
        $new_btn.css("color", colors.contrast($new_btn));

      } else {
        $new_btn.addClass("empty_config");
      }

      $new_row_div.append($new_btn);

    }
    $grid_holder.append($new_row_div);
  }
  setup_trellis_btn_click();
}