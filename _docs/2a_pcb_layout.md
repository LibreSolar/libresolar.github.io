---
title: "PCB layout"
excerpt: ""
permalink: /docs/pcb_layout
---

The Libre Solar project files are all open source and [stored on GitHub](https://github.com/LibreSolar). There is a separate repository for each PCB and an additional repository for the software.

Some of the repositories contain git submodules, so please use 
```
git clone --recursive <repository>
```
instead of the download button on github.


## PCB layout in KiCad

Except for some old boards, all Libre Solar electronics hardware is built using the open source PCB design software [KiCad 5](http://kicad-pcb.org/).

As KiCad version 5 contains lots of interesting new features (better rendering, rounded pads, STEP export, better symbol file format), the Libre Solar PCBs were recently converted to this version.

Custom footprints and symbols are saved in separate repositories:

- [https://github.com/LibreSolar/KiCad-footprints](https://github.com/LibreSolar/KiCad-footprints)
- [https://github.com/LibreSolar/KiCad-symbols](https://github.com/LibreSolar/KiCad-symbols)

The footprint library is directly included via the github import feature in KiCad. This feature does not exist for the schematics editor, so the schematic symbols are included via a git submodule.



