# Charge Controllers

The most important feature of a charge controller is the power stage, which can be either a DC/DC converter or just a switch between the solar panel and the battery. In case of the DC/DC converter, the charge controller can adapt to the input voltage of the solar panel and thus operate it in its optimum conditions. This is called a maximum power point tracker (MPPT). In contrast to that, the more simple PWM charge controller (named after its pulse-width modulated switch) can only connect or disconnect the solar panel from the battery. The solar panel voltage drops to the voltage of the battery. If the solar panel does not match the battery voltage very well, a considerable amount of energy may be lost.

Apart from this core distinguishing feature, charge controllers can have an integrated load switch, a USB charging port or different communication interfaces.

The Libre Solar charge controller types are named according to the following convention:

`[Power stage type] [Max. nominal battery voltage][Max. battery current] [Interfaces]`

The power stage type can be either MPPT or PWM.

The maximum nominal battery voltage is typically 12V or 24V. A 24V capable charge controller also supports lower voltage 12V systems.

For typical MPPT charge controllers, which step the higher voltage of the solar panel down to the lower voltage of the battery, the battery current determines the size of the converter, hence it is used in the type.

The possible interfaces mentioned in the type are described in the following table:

| Abbreviation | Description |
|--------------|-------------|
| L | Load output (low-side switch) |
| H | Load output (high-side switch) |
| U | USB charging port |
| S | Serial port with integrated temp sensor |
| C | CAN bus communication port |
| N | Nanogrid port (not used yet) |


