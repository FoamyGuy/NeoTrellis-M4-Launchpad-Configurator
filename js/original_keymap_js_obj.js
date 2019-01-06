original_keymap = {
    "(0,0)": {"color":"0x001100", "type": "MEDIA", "keys": ["ConsumerControlCode.PLAY_PAUSE"]},
    "(1,0)": {"color":"0x110011", "type": "MEDIA", "keys": ["ConsumerControlCode.SCAN_PREVIOUS_TRACK"]},
    "(2,0)": {"color":"0x330033", "type": "MEDIA", "keys": ["ConsumerControlCode.SCAN_NEXT_TRACK"]},
    "(3,0)": {"color":"0x000033", "type": "MEDIA", "keys": ["ConsumerControlCode.VOLUME_INCREMENT"]},

    "(0,1)": {"color":"0x110000", "type": "MEDIA", "keys": ["ConsumerControlCode.MUTE"]},
    // intentional blank button
    // intentional blank button
    "(3,1)": {"color":"(0,0,10)", "type": "MEDIA", "keys": ["ConsumerControlCode.VOLUME_DECREMENT"]},

    "(0,2)": {"color":"0x551100", "type": "KEY", "keys": ["Keycode.GUI", "Keycode.ALT", "Keycode.CONTROL", "Keycode.ONE"]},
    "(1,2)": {"color":"0x221100", "type": "KEY", "keys": ["Keycode.CONTROL", "Keycode.SHIFT", "Keycode.TAB"], "comment": "back cycle tabs"},
    "(2,2)": {"color":"0x221100", "type": "KEY", "keys": ["Keycode.CONTROL", "Keycode.TAB"], "comment": "cycle tabs"},
    "(3,2)": {"color":"0x333300", "type": "KEY", "keys": ["Keycode.GUI", "Keycode.ALT", "Keycode.CONTROL", "Keycode.TWO"]},

    "(0,3)": {"color":"0x001155", "type": "KEY", "keys": ["Keycode.GUI", "Keycode.ALT", "Keycode.CONTROL", "Keycode.THREE"]},
    // intentional blank button
    // intentional blank button
    "(3,3)": {"color":"0x330000", "type": "KEY", "keys": ["Keycode.GUI", "Keycode.ALT", "Keycode.CONTROL", "Keycode.FOUR"]},

    "(0,4)": {"color":"0x005511", "type": "KEY", "keys": ["Keycode.GUI", "Keycode.ALT", "Keycode.CONTROL", "Keycode.FIVE"]},
    "(1,4)": {"color":"0x440000", "type": "KEY", "keys": ["Keycode.GUI", "Keycode.ALT", "Keycode.CONTROL", "Keycode.SIX"]},
    // intentional blank button
    "(3,4)": {"color":"0x003300", "type": "KEY", "keys": ["Keycode.GUI", "Keycode.ALT", "Keycode.CONTROL", "Keycode.EIGHT"]},

    "(0,5)": {"color":"0x222222", "type": "KEY", "keys": ["Keycode.GUI", "Keycode.ALT", "Keycode.CONTROL", "Keycode.W"]},
    "(1,5)": {"color":"0x000044", "type": "KEY", "keys": ["Keycode.GUI", "Keycode.ALT", "Keycode.CONTROL", "Keycode.E"]},
    // intentional blank button
    "(3,5)": {"color":"0x332211", "type": "KEY", "keys": ["Keycode.GUI", "Keycode.ALT", "Keycode.CONTROL", "Keycode.T"]},

    "(0,6)": {"color":"0x001133", "type": "KEY", "keys": ["Keycode.GUI", "Keycode.ALT", "Keycode.CONTROL", "Keycode.C"]},
    "(1,6)": {"color":"0x331100", "type": "KEY", "keys": ["Keycode.GUI", "Keycode.ALT", "Keycode.CONTROL", "Keycode.V"]},
    "(2,6)": {"color":"0x111111", "type": "KEY", "keys": ["Keycode.GUI", "Keycode.SHIFT", "Keycode.FOUR"], "comment": "screen shot"},
    "(3,6)": {"color":"0x110000", "type": "KEY", "keys": ["Keycode.GUI", "Keycode.ALT", "Keycode.CONTROL", "Keycode.N"]},

    "(0,7)": {"color":"0x060606", "type": "KEY", "keys": ["Keycode.GUI", "Keycode.H"], "comment": "hide front app, all windows"},
    "(1,7)": {"color":"0x222200", "type": "KEY", "keys": ["Keycode.GUI", "Keycode.GRAVE_ACCENT"], "comment": "cycle windows of app"},
    "(2,7)": {"color":"0x010001", "type": "KEY", "keys": ["Keycode.GUI", "Keycode.SHIFT", "Keycode.TAB"], "comment": "cycle apps backards"},
    "(3,7)": {"color":"0x010001", "type": "KEY", "keys": ["Keycode.GUI", "Keycode.TAB"], "comment": "cycle apps forward"}
};