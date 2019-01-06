original_keymap_python_str = `keymap = {
    (0,0): (0x001100, MEDIA, ConsumerControlCode.PLAY_PAUSE),
    (1,0): (0x110011, MEDIA, ConsumerControlCode.SCAN_PREVIOUS_TRACK),
    (2,0): (0x330033, MEDIA, ConsumerControlCode.SCAN_NEXT_TRACK),
    (3,0): (0x000033, MEDIA, ConsumerControlCode.VOLUME_INCREMENT),
 
    (0,1): (0x110000, MEDIA, ConsumerControlCode.MUTE),
    # intentional blank button
    # intentional blank button
    (3,1): ((0,0,10), MEDIA, ConsumerControlCode.VOLUME_DECREMENT),
 
    (0,2): (0x551100, KEY, (Keycode.GUI, Keycode.ALT, Keycode.CONTROL, Keycode.ONE)),
    (1,2): (0x221100, KEY, (Keycode.CONTROL, Keycode.SHIFT, Keycode.TAB)),  # back cycle tabs
    (2,2): (0x221100, KEY, (Keycode.CONTROL, Keycode.TAB)),  # cycle tabs
    (3,2): (0x333300, KEY, (Keycode.GUI, Keycode.ALT, Keycode.CONTROL, Keycode.TWO)),
 
    (0,3): (0x001155, KEY, (Keycode.GUI, Keycode.ALT, Keycode.CONTROL, Keycode.THREE)),
    # intentional blank button
    # intentional blank button
    (3,3): (0x330000, KEY, (Keycode.GUI, Keycode.ALT, Keycode.CONTROL, Keycode.FOUR)),
 
    (0,4): (0x005511, KEY, (Keycode.GUI, Keycode.ALT, Keycode.CONTROL, Keycode.FIVE)),
    (1,4): (0x440000, KEY, (Keycode.GUI, Keycode.ALT, Keycode.CONTROL, Keycode.SIX)),
    # intentional blank button
    (3,4): (0x003300, KEY, (Keycode.GUI, Keycode.ALT, Keycode.CONTROL, Keycode.EIGHT)),
 
    (0,5): (0x222222, KEY, (Keycode.GUI, Keycode.ALT, Keycode.CONTROL, Keycode.W)),
    (1,5): (0x000044, KEY, (Keycode.GUI, Keycode.ALT, Keycode.CONTROL, Keycode.E)),
    # intentional blank button
    (3,5): (0x332211, KEY, (Keycode.GUI, Keycode.ALT, Keycode.CONTROL, Keycode.T)),
 
    (0,6): (0x001133, KEY, (Keycode.GUI, Keycode.ALT, Keycode.CONTROL, Keycode.C)),
    (1,6): (0x331100, KEY, (Keycode.GUI, Keycode.ALT, Keycode.CONTROL, Keycode.V)),
    (2,6): (0x111111, KEY, (Keycode.GUI, Keycode.SHIFT, Keycode.FOUR)),  # screen shot
    (3,6): (0x110000, KEY, (Keycode.GUI, Keycode.ALT, Keycode.CONTROL, Keycode.N)),
 
    (0,7): (0x060606, KEY, (Keycode.GUI, Keycode.H)),  # hide front app, all windows
    (1,7): (0x222200, KEY, (Keycode.GUI, Keycode.GRAVE_ACCENT)),  # cycle windows of app
    (2,7): (0x010001, KEY, (Keycode.GUI, Keycode.SHIFT, Keycode.TAB)),  # cycle apps backards
    (3,7): (0x010001, KEY, (Keycode.GUI, Keycode.TAB))}  # cycle apps forwards`;