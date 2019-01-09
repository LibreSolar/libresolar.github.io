---
title: "MPPT charger (10A)"
excerpt: "Flexible solar charge controller with integrated USB output."
permalink: /devices/mppt-charger-10a/
---

![Development Stage](https://img.shields.io/badge/development%20stage-release%20candidate-yellow.svg) Tested prototype, only minor issues left.

This charge controller is based on the [20A MPPT](/devices/mppt-charger-20a/), but has reduced number of components and cheaper DC/DC power stage for 10A.

The power is sufficient for small 12V applications with up to 150 W solar panels.

With the integrated dual USB output you can directly charge your mobile phone or power other devices such as Raspberry Pi.

![Charge controller PCB](/images/mppt-charger_10a.png)

## Features

- Maximum Power Point Tracking (MPPT)
- 12V battery output
- 10A peak charging current
- 55V max PV input
- Ultra low-power 32bit ARM MCU (STM32L072)
- Dual USB charging ports
- Expandable via Olimex Universal Extension Connector (UEXT) featuring I2C, Serial and SPI interface (e.g. used for display, WIFI communication, etc.)
- Built-in protection:
  - Overvoltage
  - Undervoltage
  - Overcurrent
  - PV short circuit
  - PV reverse polarity (for max. module open circuit voltage of around 40V)
  - Battery reverse polarity (destructive, fuse is blown)

## Development

The charge controller is under active development and you are welcome to participate.

Visit the [GitHub page](https://github.com/LibreSolar/MPPT-Charger_10A "10A MPPT Solar Charge Controller with USB output") for schematics and board layout.
