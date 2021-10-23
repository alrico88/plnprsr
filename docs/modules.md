[plnprsr](README.md) / Exports

# plnprsr

## Table of contents

### Classes

- [Departure](classes/Departure.md)
- [Destination](classes/Destination.md)
- [FlightPlan](classes/FlightPlan.md)
- [Procedure](classes/Procedure.md)
- [RouteItem](classes/RouteItem.md)

### Functions

- [parsePln](modules.md#parsepln)

## Functions

### parsePln

▸ **parsePln**(`planXml`): [`FlightPlan`](classes/FlightPlan.md)

Parse a PLN XML string into JSON

**`export`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `planXml` | `string` | The XML string of the .pln file |

#### Returns

[`FlightPlan`](classes/FlightPlan.md)

The parsed Flight Plan

#### Defined in

[index.ts:12](https://github.com/alrico88/plnprsr/blob/master/src/index.ts#L12)
