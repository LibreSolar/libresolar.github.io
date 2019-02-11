---
title: "DC/DC Control Modes"
excerpt: "General control strategies for DC/DC controllers converting energy between batteries, solar and nanogrids"
permalink: /docs/dcdc_control
---

Synchronous DC/DC controllers like the Libre Solar MPPT charge controllers can be operated as boost or buck converters. Buck converters have a current flow from high-side to low-side, boost converters in the opposite direction.

The connections at the high-side and low-side of the DC/DC converter are named ports. A port can be either input or output or both (e.g. in case of a battery).

The control mode of the DC/DC converter must ensure that the limits of each device connected to a port are not violated. Limits are mainly current or voltage set points.

## Devices and port types

The following diagrams give an overview of different port types. A positive current is defined as a current out of the DC/DC converter port into the connected device. Thus, a battery charging current is defined as a positive current. A solar panel always has a negative port current, as the current goes into the DC/DC converter.

All ports share the same set of calibration parameters which makes it easy to configure the DC/DC controller firmware for different operation strategies depending on the connected devices:

| Parameter              | Description
|------------------------|-----------------------------------------------------------------------------------------------|
| v<sub>out,target</sub> | Maximum voltage of an output port (e.g. charging voltage of a battery)                        |
| v<sub>out,min</sub>    | Minimum voltage to allow current output (e.g. to prevent charging deep-discharged batteries)  |
| R<sub>droop</sub>      | Allows to adjust the target voltage depending on output/input current                         |
| v<sub>in,start</sub>   | Voltage threshold at which input current is reduced. Below this voltage, the DC/DC should not start up. |
| v<sub>in,stop</sub>    | Voltage threshold at which the DC/DC is switched off (e.g. to prevent deep-discharge of a battery) |
| i<sub>min</sub>        | Maximum input current (e.g. discharging a battery)  |
| i<sub>max</sub>        | Maximum output current (e.g. charging a battery)  |


## Solar PV panel port

A solar panel port always acts as an input. Even though reverse current flow into the solar panel is physically possible (see elongated blue characteristic curve), it is not desirable and should be prevented by the charge controller algorithm and/or hardware.

Above v<sub>in,start</sub> (around 17 V for a so-called 12 V panel), the charge controller is switched on and starts current input from the solar panel. If the voltage drops during dusk, the charge controller shuts down at v<sub>in,stop</sub> (around 15 V for a 12 V panel).

![DC/DC control for solar port](/images/dcdc_port_solar.png)

If the output port allows, the solar panel will be operated in the maximum power point to generate as much power as possible.

## Battery port

Batteries can be used as an input and as an output. The following table shows typical thresholds for some types of batteries:

| Parameter              | 12V Flooded Lead-Acid | 12V Li-Iron-Phosphate   |
|------------------------|-----------------------|-------------------------|
| v<sub>out,target</sub> |  14.4 V (absorption)  | 14.2 V                  |
| v<sub>out,min</sub>    |  10 V                 | 10.4 V                  |
| v<sub>in,start</sub>   |  12.8 V               | 12.6 V                  |
| v<sub>in,stop</sub>    |  11.7 V               | 12.0 V                  |

The droop resistance can be used to compensate the wire resistance if known (the value of R<sub>droop</sub> has to be negative).

![DC/DC control for battery port](/images/dcdc_port_battery.png)

## Nanogrid port (battery type)

A nanogrid port acting as an energy storage system for the grid has a control scheme as shown below. It implements DC bus signaling to communicate the state of the system (see chapter DC Nanogrid).

![DC/DC control for nanogrid port](/images/dcdc_port_nanogrid.png)

During start-up of the nanogrid port, the DC/DC controller raises the voltage until it reaches v<sub>out,target</sub> (e.g. 48V). If a load is connected, the voltage target will drop depending on the current drawn by the load according to the following equation:

v<sub>target</sub> = v<sub>out,target</sub> - i * R<sub>droop</sub>

If another energy producer is connected to the grid (e.g. a solar panel using an additional DC/DC converter), the voltage will rise. As soon as it reaches v<sub>in,start</sub>, the nanogrid controller will start charging the battery from the grid. Again, the current will only rise slowly with increased voltage to allow smooth transitions and control of the grid.

For a nanogrid port, the v<sub>in,stop</sub> threshold is set to something very low, lower than v<sub>out,target</sub>, as the DCDC should not stop at low input voltage, but change the current direction insead.

The hysteresis between v<sub>out,target</sub> and v<sub>in,start</sub> is necessary to prevent unnecessary energy transmission between multiple batteries attached to the grid.
