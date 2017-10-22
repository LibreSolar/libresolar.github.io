---
title: "Flashing the firmware"
excerpt: "ARM mbed embedded software environment used for Libre Solar hardware"
permalink: /docs/flashing/
---

There are basically two ways to upgrade the firmware of the Libre Solar hardware. For development we recommend to purchase an STM Nucleo board with integrated ST-Link/V2 debug adapter. The boards are very cheap and allow not only firmware upgrade but also debugging via the serial wire debug (SWD) interface. If you want to upgrade to an already tested new firmware version, you might aswell use the USB interface which does not need any additional hardware except for a Micro USB cable (the same as used for smart phones).

For both options, you need to install PlatformIO (or a different toolchain) and download the software source code from github first.

## Debug port via ST-Link/V2

The Libre Solar boards contain a 6-pin header with exactly the same pin-out as the SWD connector on the ST-Link/V2 of the Nucleo boards. Just connect via some jumper wires, supply power to the device and you are ready to go.


## DFU via USB

Device Firmware Upgrade (DFU) is an official USB device class specification. It is natively supported by Linux. For Windows you need to install some drivers as explained below.

### Windows

The Libre Solar boards go into DFU bootloader mode if the reset button is pressed for 3 seconds or longer. After sucessfully loading the bootloader (and after installing the DFU drivers in windows) your device should show up in the hardware manager:

![DFU device in Windows hardware manager](/images/docs_firmware_dfu_device.png)

Now you need the DFU File Manager to generate a DFU file and the DfuSe tool to upload your firmware to the device. The tools can be [downloaded on the ST website](http://www.st.com/en/development-tools/stsw-stm32080.html).

Start DFU File Manager and select *I want to GENERATE a DFU file from S19, HEX or BIN files*.

![Generate .DFU file from an .HEX or .S19 file](/images/docs_firmware_dfu_generatefile.png)

Although not strictly necessary, fill the dialog with the following data to suppress some warnings later on:

- Target Name: STM32F072CB (the standard micro used by Libre Solar boards)
- Vendor ID 0x: 0483
- Product ID 0x: DF11
- Version 0x: 2200

Now select *Multi BIN...* and look for the file *firmware.bin* in the sub-folder *\.pioenvs\stlink* of your PlatformIO project directory. The correct address is 0x08000000. Press *Add to list >>" and confirm with OK.

![Select BIN file for DFU generation](/images/docs_firmware_dfu_multibin.png)

Everything is set and you should be able to generate the DFU file. Save it somewhere in your project folder.

![Select BIN file for DFU generation](/images/docs_firmware_dfu_file_gen.png)

To upload the DFU file, start the DfuSe Demo tool and select the generated DFU file with the button *Choose...* under *Upgrade and Verify Action*. As a last step click *Upgrade* and wait until you get the success message.

![Select BIN file for DFU generation](/images/docs_firmware_dfuse_upgrade.png)

Congratulations. After a reset of the device, it should run with new firmware.

### Linux

Under Linux you need to install [dfu-util](http://dfu-util.sourceforge.net/). The settings should be similar as above.
