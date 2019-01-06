function ColorLuminance(hex, lum) {

  // validate hex string
  hex = String(hex).replace(/[^0-9a-f]/gi, '');
  if (hex.length < 6) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }
  lum = lum || 0;

  // convert to decimal and change luminosity
  var rgb = "#", c, i;
  for (i = 0; i < 3; i++) {
    c = parseInt(hex.substr(i * 2, 2), 16);
    c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
    rgb += ("00" + c).substr(c.length);
  }

  return rgb;
}

function get_brightened_color(input_color) {
  if (input_color.startsWith("0x")) {
    var brightened = ColorLuminance(input_color.replace("0x", ""), 6.0);
    return brightened;
  } else if (input_color.startsWith("(")) {
    var color = input_color.replace("(", "").replace(")", "");
    var brightened = ColorLuminance(rgbToHex(color.split(",")[0], color.split(",")[1], color.split(",")[2]), 6.0);
    return brightened;
  }
}

function get_darkened_color(input_color) {
  console.log("input: "+ input_color.toHexString().replace("#", "0x"));
  input_color = input_color.toHexString().replace("#", "0x");
  if (input_color.startsWith("0x")) {
    var darkened = ColorLuminance(input_color.replace("0x", ""), -0.5);
    console.log("brightened: " + ColorLuminance(darkened, 0.5));
    return darkened;
  }
}

function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}