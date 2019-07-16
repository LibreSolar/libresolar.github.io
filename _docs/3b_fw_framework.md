---
title: "Firmware Development Framework"
excerpt: "ARM mbed embedded software environment used for Libre Solar hardware"
permalink: /docs/framework/
---

The firmware for the Libre Solar hardware is developed using the [ARM mbed OS](https://developer.mbed.org/) embedded software framework. This makes it possible to use easy-to-understand C++ syntax (similar to Arduino) and enhances community based software development.

You can find the firmware in the [Libre Solar GitHub profile](https://github.com/LibreSolar) as repositories separate from the hardware files.

We recommend to use Visual Studio Code and [PlatformIO](http://platformio.org/) as an IDE for software development.

All Libre Solar software repositories are structured as PlatformIO projects:

```
|--lib/
|  |--Foo
|  |  |- Foo.cpp
|  |  |- Foo.h
|  |--Bar
|  |  |- Bar.cpp
|  |  |- Bar.h
|--src/
|  |- config.h
|  |- main.cpp
|- platformio.ini
|- README.md
|- LICENSE
```

The main firmware is located in the `src` folder, external libraries or reuseable code are stored under `lib`.

The platformio.ini file contains some important settings which might have to be adjusted:

```ini
[env:nucleo]
platform = ststm32
framework = mbed
board = nucleo_f072rb
upload_protocol = stlink

# Settings:
# - enable float formatting for printf, adding approx. 7 kB of bin file size
# - C++11 to be able to define default values for struct members
# - Use low speed internal clock (LSI) for RTC (no LSE crystal on PCB)
build_flags =
    -Wl,-u_printf_float
    -std=c++11
    -DMBED_CONF_TARGET_LSE_AVAILABLE=0

# Custom Serial Monitor port
# monitor_port = /dev/ttyUSB1

# Custom Serial Monitor baud rate
monitor_baud = 115200
```

Of course, you can also use your favourite IDE and the mbed command line interface.

The chapter **Flashing** describes in detail how you connect the hardwar in order to upload the software to the device.
