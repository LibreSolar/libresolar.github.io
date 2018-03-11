---
title: "48V Battery Management System"
excerpt: "Flexible battery management system for 24-48V system voltage"
permalink: /devices/bms-48v/
---

Battery management system for up to 15 Li-ion cells based on bq76940 or bq76930 IC from Texas Instruments

The Libre Solar BMS is divided into two different boards:

- Control board (BMS48V)
- Power board (Switch-N-Sense)

A picture of the current version is shown below:

![24V (10s) Battery management system](/images/bms24v_board_20161217.jpg)

On the bottom of the control board (left side), the cells are connected for balancing and voltage monitoring. In addition to that, up to three temperature sensors (10k thermistors) can be connected to the board. The board features a CAN interface through two daisy-chained RJ-45 connectors. Via the universal UEXT connector, additional peripherals can be connected via SPI, I2C or USART.

The Switch-N-Sense board acts as the interface between the Li-ion battery and the outside world. It contains the sense resistors for current measurement and charge/discharge MOSFETs at the bottom side. For improved cooling, it can be attached to a cooling plate. The wire-to-board connection is done via Würth Power Element press-fit connectors, allowing very high currents.

The two boards are separated in order to adjust the power part depending on your actual needs. If you only need to deliver low currents from the battery, the Switch-N-Sense board can be smaller and cheaper.

This repository contains only the control board. Please see [the Switch-N-Sense repository](https://github.com/LibreSolar/Switch-N-Sense) for details on the power part of the BMS including hardware files.


## Features

- Up to 15 Li-ion cells (e.g. LiFePO4)
- MCU: STM32F072 (ARM Cortex M0)
- CAN communication inteface
- UEXT connector for feature extension
- Current depending on externan Switch-N-Sense board (current design: 80A for <60V)
- FDMT80080DC as CHG and DSG FETs (same as new SBMS100 from Dacian Todea)
- High-side switches using new TI BQ76200 --> no problems with ground offsets for CAN communiction etc. anymore.
- Possibility of pre-charging the 48V bus before switching on the battery.
- Balancing current approx. 150 mA

## Development

The BMS is under active development and you are welcome to participate.

Visit the [GitHub page](https://github.com/LibreSolar/BMS48V "48V Battery Management System") for schematics and board layout.

