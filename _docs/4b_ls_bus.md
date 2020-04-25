---
title: "LS.bus CAN communication interface"
excerpt: "CAN bus interface used in Libre Solar components"
permalink: /docs/ls_bus/
---

In contrast to the more simple LS.one interface, the LS.bus interface is based on CAN to allow connection of multiple devices. The main advantage of CAN compared to other low-level communication buses is that it allows master-less operation, i.e. each device can start communicating with other devices. The idea is to develop a plug & play communication method for energy systems with a completely open source specification.

## Connector and pinout

The connector is a standard RJ45 jack as used for Ethernet. Also the same wires (Cat. 5e twisted pair or better) are used, allowing reliable communication with easily available parts.

The pinout of the connector is similar to the CANopen specification:

| Pin # | Name  | Description |
|-------|-------|-------------|
| 1     | CAN_H | CAN bus high signal |
| 2     | CAN_L | CAN bus low signal |
| 3     | GND   | CAN and power supply GND (optional) |
| 4     | V+    | Bus power supply (optional, 12-24V nominal) |
| 5     | V+    | Bus power supply (optional, 12-24V nominal) |
| 6     | -     | reserved (do not connect) |
| 7     | GND   | CAN and power supply GND (optional) |
| 8     | (V+)  | Unconnected by default, optional jumper to V+ |

The pinout specification aims to create as little interference with existing standards as possible. Most important, any damage must be prevented if a LS.bus device is accidentally connected to a standard Ethernet jack.

In contrast to the CANopen specification, pin 8 is not used as the bus power supply (V+) by default. 10/100 MBit Ethernet jacks with integrated magnetics (e.g. [these ones](https://katalog.we-online.de/pbs/download/Tutorials_Connecting+LAN+Transformers_EN+%28rev1%29.pdf)) internally connect pin 4 to 5 and pin 7 to 8. In addition to that, Power over Ethernet (PoE) uses pins 4+5 for positive power rail and pins 7+8 for GND. So it's not ideal to use pin 7 as GND and pin 8 as V+. Boards can however offer a jumper to connect pin 8 with the other V+ pins (4 and 5) for bus supply of CANopen devices.

Galvanic isolation is currently not considered mandatory, as long as all devices are connected via thick wires. This might change in the future.

One device typically has 2 RJ45 jacks for daisy-chaining the devices and maintaining the bus topology. There is no such thing like a switch needed. However, the endpoints have to be terminated with termination plugs or resistors.

A device that supplies power to V+ may not hard-connect the daisy-chained wires without any fuses in order to ensure that the current rating per wire is not exceeded. Devices without power supply may just route through the powered wires.

The maximum current per wire pair is 600 mA (300 mA per wire), same as PoE+ (IEEE 802.3at Type 2) with CAT5e cables.

## Development status

The protocol for messages sent over CAN is not yet fully specified. It will be based on the [ThingSet](https://thingset.github.io/) binary protocol.
