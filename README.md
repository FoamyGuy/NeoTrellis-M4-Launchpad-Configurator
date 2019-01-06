### [See this Adafruit Learning System Guide for background info, and to get started.](https://learn.adafruit.com/launch-deck-trellis-m4)
 
## Adafruit NeoTrellis M4 Launchpad Configurator

This project intends to provide a tool that makes it easier to configure your Adafruit NeoTrellis M4 for use as a launchpad device such as the one in the guide.

It is implemented as an HTML5 web application that you can run locally, or host on a server is you wish. The application provides a nice, easy to use GUI for editing the configuration of the launchpad.

As you can see in the guide the main configuration is controlled by a python dictionary variable named `keymap`. The keys of the dictionary are NeoTrellis coordinate tuples like `(0,1)`. The values in the dictionary are tuples which contain the color, a type code, an optional comment, and either a single keycode, or a tuple containing multiple keycodes.

This application allows you to import the python `keymap` dictionary by pasting it into a `<textarea>`. It creates a Javascript object with matching data. Then you can make changes to colors and keys pressed, you can even add comments if you want. 

Once you're happy with the configuration click the export button to rebuild the python dictionary from the edited Javascript object. It will output to a `<textarea>`, then you can copy the dictionary definition and paste it back into your `code.py` file. 

Basic Usage Screenshot: 
![Help Image](https://raw.githubusercontent.com/FoamyGuy/NeoTrellis-M4-Launchpad-Configurator/master/help.PNG)



