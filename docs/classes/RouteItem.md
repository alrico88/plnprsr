[plnprsr](../README.md) / [Exports](../modules.md) / RouteItem

# Class: RouteItem

## Table of contents

### Constructors

- [constructor](RouteItem.md#constructor)

### Properties

- [airway](RouteItem.md#airway)
- [altitude](RouteItem.md#altitude)
- [bearing](RouteItem.md#bearing)
- [coords](RouteItem.md#coords)
- [distance](RouteItem.md#distance)
- [id](RouteItem.md#id)
- [ident](RouteItem.md#ident)
- [runway](RouteItem.md#runway)
- [sid](RouteItem.md#sid)
- [star](RouteItem.md#star)
- [type](RouteItem.md#type)

## Constructors

### constructor

• **new RouteItem**(`input`, `prevWaypoint?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `RouteItemInput` |
| `prevWaypoint?` | `RouteItemInput` |

#### Defined in

[models/RouteItem.ts:96](https://github.com/alrico88/plnprsr/blob/master/src/models/RouteItem.ts#L96)

## Properties

### airway

• `Optional` **airway**: `string`

If the waypoint is part of an airway, its identification

**`memberof`** RouteItem

#### Defined in

[models/RouteItem.ts:38](https://github.com/alrico88/plnprsr/blob/master/src/models/RouteItem.ts#L38)

___

### altitude

• **altitude**: `number`

The altitude for this leg

**`memberof`** RouteItem

#### Defined in

[models/RouteItem.ts:54](https://github.com/alrico88/plnprsr/blob/master/src/models/RouteItem.ts#L54)

___

### bearing

• **bearing**: `number`

Bearing from the previous waypoint

**`memberof`** RouteItem

#### Defined in

[models/RouteItem.ts:70](https://github.com/alrico88/plnprsr/blob/master/src/models/RouteItem.ts#L70)

___

### coords

• **coords**: [`number`, `number`]

Waypoint's coordinates [lon, lat]

**`memberof`** RouteItem

#### Defined in

[models/RouteItem.ts:22](https://github.com/alrico88/plnprsr/blob/master/src/models/RouteItem.ts#L22)

___

### distance

• **distance**: `number`

The distance from the previous waypoint

**`memberof`** RouteItem

#### Defined in

[models/RouteItem.ts:62](https://github.com/alrico88/plnprsr/blob/master/src/models/RouteItem.ts#L62)

___

### id

• **id**: `string`

Waypoint's ID

**`memberof`** RouteItem

#### Defined in

[models/RouteItem.ts:14](https://github.com/alrico88/plnprsr/blob/master/src/models/RouteItem.ts#L14)

___

### ident

• `Optional` **ident**: `string`

The ICAO name of the waypoint

**`memberof`** RouteItem

#### Defined in

[models/RouteItem.ts:46](https://github.com/alrico88/plnprsr/blob/master/src/models/RouteItem.ts#L46)

___

### runway

• `Optional` **runway**: `string`

The runway the SID or STAR belongs to, if any

**`memberof`** RouteItem

#### Defined in

[models/RouteItem.ts:94](https://github.com/alrico88/plnprsr/blob/master/src/models/RouteItem.ts#L94)

___

### sid

• `Optional` **sid**: `string`

The SID the waypoint belongs to, if any

**`memberof`** RouteItem

#### Defined in

[models/RouteItem.ts:78](https://github.com/alrico88/plnprsr/blob/master/src/models/RouteItem.ts#L78)

___

### star

• `Optional` **star**: `string`

The STAR the waypoint belongs to, if any

**`memberof`** RouteItem

#### Defined in

[models/RouteItem.ts:86](https://github.com/alrico88/plnprsr/blob/master/src/models/RouteItem.ts#L86)

___

### type

• **type**: `string`

The type of the waypoint, VOR, NDB, USER...

**`memberof`** RouteItem

#### Defined in

[models/RouteItem.ts:30](https://github.com/alrico88/plnprsr/blob/master/src/models/RouteItem.ts#L30)
