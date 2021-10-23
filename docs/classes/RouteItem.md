[plnprsr](../README.md) / [Exports](../modules.md) / RouteItem

# Class: RouteItem

## Table of contents

### Constructors

- [constructor](RouteItem.md#constructor)

### Properties

- [airway](RouteItem.md#airway)
- [altitude](RouteItem.md#altitude)
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

models/RouteItem.ts:87

## Properties

### airway

• `Optional` **airway**: `string`

If the waypoint is part of an airway, its identification

**`memberof`** RouteItem

#### Defined in

models/RouteItem.ts:37

___

### altitude

• **altitude**: `number`

The altitude for this leg

**`memberof`** RouteItem

#### Defined in

models/RouteItem.ts:53

___

### coords

• **coords**: [`number`, `number`]

Waypoint's coordinates [lon, lat]

**`memberof`** RouteItem

#### Defined in

models/RouteItem.ts:21

___

### distance

• **distance**: `number`

The distance from the previous waypoint

**`memberof`** RouteItem

#### Defined in

models/RouteItem.ts:61

___

### id

• **id**: `string`

Waypoint's ID

**`memberof`** RouteItem

#### Defined in

models/RouteItem.ts:13

___

### ident

• `Optional` **ident**: `string`

The ICAO name of the waypoint

**`memberof`** RouteItem

#### Defined in

models/RouteItem.ts:45

___

### runway

• `Optional` **runway**: `string`

The runway the SID or STAR belongs to, if any

**`memberof`** RouteItem

#### Defined in

models/RouteItem.ts:85

___

### sid

• `Optional` **sid**: `string`

The SID the waypoint belongs to, if any

**`memberof`** RouteItem

#### Defined in

models/RouteItem.ts:69

___

### star

• `Optional` **star**: `string`

The STAR the waypoint belongs to, if any

**`memberof`** RouteItem

#### Defined in

models/RouteItem.ts:77

___

### type

• **type**: `string`

The type of the waypoint, VOR, NDB, USER...

**`memberof`** RouteItem

#### Defined in

models/RouteItem.ts:29
