### [See this Adafruit Learning System Guide for background info, and to get started.](https://learn.adafruit.com/launch-deck-trellis-m4)

If you understand the basic idea already and just want to get up and running ASAP you can use [this direct link to the code.py file.](https://raw.githubusercontent.com/adafruit/Adafruit_Learning_System_Guides/master/Launch_Deck_Trellis_M4/launch_deck_trellis_m4.py)

## Adafruit NeoTrellis M4 Launchpad Configurator

This project intends to provide a tool that makes it easier to configure your Adafruit NeoTrellis M4 for use as a launchpad device such as the one in the guide.

It is implemented as an HTML5 web application that you can run locally, or host on a server is you wish. The application provides a nice, easy to use GUI for editing the configuration of the launchpad.

As you can see in the guide the main configuration is controlled by a python dictionary variable named `keymap`. The keys of the dictionary are NeoTrellis coordinate tuples like `(0,1)`. The values in the dictionary are tuples which contain the color, a type code, an optional comment, and either a single keycode, or a tuple containing multiple keycodes.

This application allows you to import the python `keymap` dictionary by pasting it into a `<textarea>`. It creates a Javascript object with matching data. Then you can make changes to colors and keys pressed, you can even add comments if you want. 

Once you're happy with the configuration click the export button to rebuild the python `keymap` dictionary from the edited Javascript object. It will output to a `<textarea>`, then you can copy the dictionary definition and paste it back into your `code.py` file. 

You'll start with an empty configuration. If you don't have one that you want to import, but still want to start from somewhere you can click the Load Sample button to load the configuration used in the guide.
Basic Usage Screenshot: 
![Help Image](https://raw.githubusercontent.com/FoamyGuy/NeoTrellis-M4-Launchpad-Configurator/master/help.PNG)


### FAQ:
**Q:** What's up with the colors? The value in the color selector is different than what is shown in the button array.

**A:** The neopixels on the Trellis board are much brighter than a standard computer monitor which leads to the colors appearing brighter when shown on the neopixels than they do on a standard PC monitor. To compensate for this the application artificially brightens the colors shown in the button array. The value from the color selector is the "real" value that will get used by the NeoTrellis, but remember that it'll appear brighter to your eyes. You are encouraged to tinker a bit to get a feel for how colors will appear based on the selection.

**Q:** Are there plans to extend the functionality of the tool further?

**A** Perhaps a few small tweaks or improvements. But likely nothing major. Currently I intend for this to compliment the original Launch Deck code from the guide. Maybe further down the road we can fork the original project to add more functionalities and then expose them in this tool, but nothing is specifically planned. If you have ideas let us know!