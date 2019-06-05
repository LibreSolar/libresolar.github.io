---
title: "LS.bus CAN communication interface"
excerpt: "CAN bus interface used in Libre Solar components"
permalink: /docs/ls_bus/
---

In contrast to the more simple LS.one interface, the LS.bus interface is based on CAN to allow connection of multiple devices. The main advantage of CAN compared to other low-level communication buses is that it allows master-less operation, i.e. each device can start communicating with other devices. The idea is to develop a plug & play communication method for energy systems with a completely open source specification.

## Connector and pinout

The connector is a standard RJ45 jack as used for Ethernet. Also the same wires (Cat. 5e twisted pair) are used, allowing reliable communication with easily available parts.

The pinout of the connector is the same as defined in the CANopen specification:

| Pin # | Name  | Description |
|-------|-------|-------------|
| 1     | CAN_H | CAN bus high signal |
| 2     | CAN_L | CAN bus low signal |
| 3     | -     | reserved (do not connect) |
| 4     | -     | reserved (do not connect) |
| 5     | -     | reserved (do not connect) |
| 6     | -     | reserved (do not connect) |
| 7     | GND   | CAN ground reference (optional) |
| 8     | (V+)  | Preliminary: Bus power supply (optional, voltage t.b.d.) |

This pinout prevents interference with Power over Ethernet (PoE), which uses pins 4 and 5 for high voltage. It should also not create any damage if accidentally connected to a standard Ethernet jack.

Galvanic isolation is currently not considered mandatory, as long as all devices are connected via thick wires.

## Development status

The protocol for messages sent over CAN is not yet fully specified. It will be based on the [ThingSet](https://thingset.github.io/) binary protocol.
