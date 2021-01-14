---
title: "Flashing the firmware"
excerpt: "ARM mbed embedded software environment used for Libre Solar hardware"
permalink: /docs/flashing/
---

There are basically two ways to upgrade the firmware of the Libre Solar hardware. For development we recommend to purchase an STM Nucleo board with integrated ST-Link/V2 debug adapter. The boards are very cheap and allow not only firmware upgrade but also debugging via the serial wire debug (SWD) interface. If you want to upgrade to an already tested new firmware version, you might aswell use the USB interface which does not need any additional hardware except for a Micro USB cable (the same as used for smart phones).

For both options, you need to install [PlatformIO](http://platformio.org/) (or a different toolchain) and [download the software source code from github](https://github.com/LibreSolar) first.

## Serial Wire Debug (SWD) port via ST-Link/V2

### Cortex debug connector

Some older boards (e.g. the 48V BMS) contain the standard 10-pin Cortex connector with 1.27 mm pin pitch. This connector is quite expensive and not very breadboard-friendly, so the newer versions of the PCBs just contain pin headers (see below).

For the boards with Cortex connector, we recommend to order [this adapter PCB](https://github.com/LibreSolar/Cortex_ST-Link_Adapter) to mount it to the Nucleo ST-Link/V2 board.

### SWD pin header

The Libre Solar boards contain a 6-pin header with exactly the same pin-out as the SWD connector on the ST-Link/V2 of the Nucleo boards. In addition to that, you can use the serial interface built-in to the Nucleo board to transfer debug information via an additional 2-pin connector.

::: Warning
Before you can flash the software, the device needs to be powered, either via USB or the battery. The VCC from SWD does not provide power, it just detects the supply voltage of the target.
:::

For the serial wire debug (SWD) interface just connect the same pins of the SWD connector of both boards. The following table gives an overview of the connector pinout:

| Pin function   | Nucleo board | Libre Solar board |
|----------------|--------------|-------------------|
| VCC            | SWD pin 1    | SWD pin 1         |
| SWCLK          | SWD pin 2    | SWD pin 2         |
| GND            | SWD pin 3    | SWD pin 3         |
| SWDIO          | SWD pin 4    | SWD pin 4         |
| NRST           | SWD pin 5    | SWD pin 5         |
| SWO (optional) | SWD pin 6    | SWD pin 6         |

**Important note:** The jumpers at the CN2 connector of the nucleo board have to be removed (see also picture below) in order to flash the external device connected via the SWD connector. Otherwise, the software will be flashed to the integrated MCU.

The USART serial interface connection is optional, but very useful during development for sending messages between the device and the computer. The wires have to be connected according the following table:

| Pin function | Nucleo board   | Libre Solar board |
|--------------|----------------|-------------------|
| UART serial  | CN3 pin 1 (RX) | P1 pin 1 (TX)     |
| UART serial  | CN3 pin 2 (TX) | RX pin 2 (RX)     |

Please note that TX and RX are crossed between the boards. The receive pin (RX) of one board connects to the transmit pin (TX) of the other board.

The following picture shows the location of the connector on the Libre Solar MPPT and the Nucleo board.

![SWD and serial connector MPPT board](/images/swd_mppt.jpg) ![SWD and serial connector Nucleo board](/images/swd_nucleo.jpg)

Now you can press the upload button in your PlatformIO IDE to flash and test the device.

## DFU via USB

Device Firmware Upgrade (DFU) is an official USB device class specification. It is natively supported by Linux. For Windows you need to install some drivers as explained below.

### USB DFU bootloader selection

The Libre Solar boards contain a small reset button next to the USB connector. This button has to be pressed and released for 3 seconds or longer to enable the DFU mode and be able to receive software upgrades.

### Windows

After sucessfully loading the bootloader (and after installing the DFU drivers in Windows) your device should show up in the Hardware Manager:

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

Under Linux you need to install [dfu-util](http://dfu-util.sourceforge.net/).

Your command-line might look somehow like this:

    arm-none-eabi-objcopy -O binary path/to/firmware.elf path/to/firmware.bin
    sudo dfu-util -d 0483:df11 -a 0 -s 0x08000000:leave -D path/to/firmware.bin