---
title: "Devices for DC energy systems"
excerpt: "The Open Source Energy System will consist of several connected consumers and produces."
permalink: /devices/
---

The vision behind Libre Solar is to develop open-source hardware components for a smart and renewable energy system.

## Development stage badges

Currently, different versions of charge controllers and battery management systems (BMS) are under development. The development stage of the devices is marked with the following badges:

![Development Stage](https://img.shields.io/badge/development%20stage-alpha-red.svg) Very early development stage, major issues expected.

![Development Stage](https://img.shields.io/badge/development%20stage-beta-orange.svg) Prototype built, development ongoing (major issues might still be open).

![Development Stage](https://img.shields.io/badge/development%20stage-release%20candidate-yellow.svg) Tested prototype, only minor issues left.

![Development Stage](https://img.shields.io/badge/development%20stage-release-green.svg) Device ready for production.

Unless stated otherwise, none of the published devices has passed regulatory certification, so use them at your own risk and responsibility (see also [CC-BY-SA license](https://creativecommons.org/licenses/by-sa/4.0/legalcode)).

We are planning to release some of the devices as fully certified products that can be bought either fully assembled or as a kit. Until then you will have to assemble the devices yourself.

## Versioning

The versioning for hardware follows the scheme `major.minor[.revision]`.

The *major* version is only increased for a complete redesign or significant changes of features. During initial development phase, the major version is `0`. The first released hardware that goes into production gets version `1.0`.

If small features are added or changed, or pin assignment of the MCU is updated, the *minor* version number is increased. A change in the minor version might require changes in the firmware.

The *revision* number is optional and should identify small changes, especially bug fixes. The firmware must be compatible with the previous revision of the same minor version, so no pin or resistor divider changes are allowed.