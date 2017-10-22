---
title: "Environment and tools"
excerpt: ""
permalink: /docs/environment/
---

The Libre Solar project files are all open source and [stored on GitHub](https://github.com/LibreSolar). There is a separate repository for each PCB and an additional repository for the software.

Some of the repositories contain git submodules, so please use 
```
git clone --recursive <repository>
```
instead of the download button on github.


## Hardware design

Except for some old boards, all Libre Solar electronics hardware is built using the open source PCB design software [KiCad](http://kicad-pcb.org/).

As the new nightly builds of KiCad contain some very nice features (better rendering, rounded pads, STEP export), the nightly builds were used. Unfortunately, the board file is incompatible with the current stable version. Please download the nightly build.

Custom footprints and symbols are saved in separate repositories:

- [https://github.com/LibreSolar/KiCad-footprints](https://github.com/LibreSolar/KiCad-footprints)
- [https://github.com/LibreSolar/KiCad-symbols](https://github.com/LibreSolar/KiCad-symbols)

The footprint library is directly included via the github import feature in KiCad. This feature does not exist for the schematics editor, so the schematic symbols are included via a git submodule.


## Software development

The firmware for the Libre Solar hardware is developed using the [ARM mbed OS](https://developer.mbed.org/) embedded software framework. This makes it possible to use easy-to-understand C++ syntax (similar to Arduino) and enhances community based software development.

We recommend to use [PlatformIO](http://platformio.org/) as an IDE for software development. All software repositories are structured as a PlatformIO project. Of course, you can also use your favourite IDE and the mbed command line interface.

