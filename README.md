# ![NumberField](https://user-images.githubusercontent.com/44801418/48110162-0eafed00-e27d-11e8-8a56-3ac1067af758.png) NumberField

[![Greenkeeper badge](https://badges.greenkeeper.io/entercosmos/number-field.svg)](https://greenkeeper.io/)

[![npm package][npm-badge]][npm]

Used for entering a number.

## Getting started

```
npm install @cmds/number-field --save
```

### Prop Types

| Property | Type | Required? | Description |
|:---|:---|:---:|:---|
| id | String | ✓ | Unique id for the instance of this field |
| contextId | Context | ✓ | The appearance will change depending on context in which the field is displayed. Valid options include: `recordDetail` or `recordGridRow` or `recordGalleryCard` or `recordListItem` |
| roleId | Role | ✓ | The behaviour changes based on the role. Valid options include `editor` or `readOnly` |
| precisionId | NumberPrecision | ✓ | Display and edit `x` amount of numbers after the point. Precision ID of `2` will result in `2.25`. Valid options include `1` or `2` or `3` or `4` or `5` or `6` or `7` or `8`|
| allowNegativeNumbers | Boolean | ✓ | Enable displaying / editing negative numbers |
| numberFormatId | NumberFormat | ✓ | Whether the number should be displayed / edited as an integer or decimal. Valid options include `decimal` or `integer` |
| number | Number | | Number value |
| onChange | Function |  | Callback invoked whenever number changes: `({id: string, number: number}): void` |

### More information

This component is designed and developed as part of [Cosmos Design System][cmds]. 

[cmds]: https://github.com/entercosmos/cosmos
[npm-badge]: https://img.shields.io/npm/v/@cmds/number-field.svg
[npm]: https://www.npmjs.org/@cmds/number-field

