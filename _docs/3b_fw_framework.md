---
title: "Firmware Development Framework"
excerpt: "ARM mbed embedded software environment used for Libre Solar hardware"
permalink: /docs/framework/
---

The firmware for the Libre Solar hardware is currently developed using the [ARM Mbed OS](https://developer.mbed.org/) embedded software framework. This makes it possible to use easy-to-understand C++ syntax (similar to Arduino) and enhances community based software development.

You can find the firmware in the [Libre Solar GitHub profile](https://github.com/LibreSolar) as repositories separate from the hardware files.

We recommend to use Visual Studio Code as an IDE and [PlatformIO](http://platformio.org/) plugin for firmware development.

The chapter **Flashing** describes in detail how you connect the hardware in order to upload the firmware to the device.

## Alternative firmware frameworks

We had some issues with Mbed in the past, mainly related to:

- Internal changes between different versions which caused strange errors in previously working firmware
- No proper support for custom boards

So we are currently evaluating alternative firmware frameworks that include an RTOS. Zephyr is the most promising candidate. It is supported by the Linux Foundation and has a very active and growing community. The following table compares some different options:

Criterion             | Arduino | ARM Mbed  | Zephyr   | RIOT   | FreeRTOS  |
----------------------|---------|-----------|----------|--------|-----------|
License               | LGPL    | Apache 2  | Apache 2 | LGPL   | MIT       |
Integrated RTOS       | no      | yes       | yes      | yes    | yes       |
Integrated HAL        | yes     | yes       | yes      | yes    | no        |
Core language         | C++     | C++       | C        | C      | C         |
Supported platforms   | many    | only ARM  | many     | many   | many      |
Custom board support  | medium  | medium [1]| good     | good   | good      |
Target users          | makers  | both [2]  | both     | both   | industry  |
Ease of use [3]       | good    | good      | medium   | medium | medium    |

The table was filled out to the best of our knowledge and might be subjective in some aspects. If you disagree or find errors, let us know in the [issues for this website](https://github.com/LibreSolar/libresolar.github.io/issues).

**Remarks:**

1. Custom boards can be added, but you need to patch the targets.json file of the original repository. The entire framework does not differentiate between MCU definitions and board definitions. Instead, everything is gathered in one "targets" folder. So you can't simply define different pin settings for an already supported MCU.
2. Based on how custom boards are supported, one could argue that the main focus is makers only.
3. Judged good if PlatformIO available. PlatformIO support for Zephyr is [under development](https://github.com/platformio/platformio-core/issues/1613).

There are some popular frameworks not taken into consideration for the following reasons:

- ChibiOS supports only STM32 microcontrollers. In addition to that, it is developed in the [cathedral style](https://en.wikipedia.org/wiki/The_Cathedral_and_the_Bazaar), which is not considered ideal for a community-driven open source project.
- LibOpenCM3 is only a HAL library and does not provide RTOS features.
