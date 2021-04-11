# Inactive BMS Designs

Similar to [inactive charge controller designs](cc-inactive.md), also some of the previous Libre Solar BMS hardware is not actively developed anymore.

## BMS 5S50 SC

GitHub repository: [LibreSolar/bms-5s50-sc](https://github.com/LibreSolar/bms-5s50-sc)

This battery management system for up to 5 Li-ion cells is based on bq76920 IC from Texas Instruments. It has separate stacked boards for control and power.

As the 5s chip allows to build only 12V batteries, the newer [BMS 8s50 IC](bms-8s50-ic.md) was developed using the ISL94202 to support 12V and 24V systems. The new design also reduces cost because power and control circuit share the same board.
