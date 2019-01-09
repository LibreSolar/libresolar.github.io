---
title: "UEXT Modules"
permalink: /devices/uext-modules/
---

The Universal Extension Connector is a 10-pin connector featuring most important microcontroller interfaces I2C, UART and SPI. With the integrated 3V3 power supply, it can be used to connect different communication modules to a given device.

All Libre Solar devices are equipped with a UEXT connector.

Several UEXT modules are available at [Olimex](https://www.olimex.com/Products/Modules/UEXT/), the inventor of the UEXT standard.

Here are some additional modules we developed for the Libre Solar components:

## GSM module

![Development Stage](https://img.shields.io/badge/development%20stage-release%20candidate-yellow.svg) Tested prototype, only minor issues left.

![GSM communication module with UEXT connector](/images/UEXT_GSM_top.png)

### Features

- Based on SIM800L module
- Separate power supply from 12V or 5V (GSM board needs 4.2V and 2A)
- Reverse polarity protection for separate power supply

### Further information

Visit the [GitHub page](https://github.com/LibreSolar/UEXT_GSM) for schematics and board layout.


## LoRa module

![Development Stage](https://img.shields.io/badge/development%20stage-release%20candidate-yellow.svg) Tested prototype, only minor issues left.

![LoRa communication module with UEXT connector](/images/UEXT_LoRa.png)

### Features

- Based on HopeRF RFM95
- Separate antenna connector

### Further information

Visit the [GitHub page](https://github.com/LibreSolar/UEXT_LoRa) for schematics and board layout.

