# Firmware and Software

We are using [Zephyr RTOS](https://www.zephyrproject.org/) for most of our firmware.

These are the some of the key advantages of Zephyr compared to other embedded operating systems:

- Excellent build system and customization (based on Devicetree and Kconfig from Linux kernel) that allows a clear separation between board specification and the firmware itself.
- Great community and open governance, so it’s a truly community-driven open source project.
- Strong focus on code quality, security and safety (aiming towards ISO 26262 and IEC 61508 certification)

Libre Solar is also actively contributing to upstream Zephyr.

## Further information

The C/C++ coding style for our firmware development is described [here](https://github.com/LibreSolar/coding-style).
