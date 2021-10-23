[plnprsr](../README.md) / [Exports](../modules.md) / Departure

# Class: Departure

## Table of contents

### Constructors

- [constructor](Departure.md#constructor)

### Properties

- [altitude](Departure.md#altitude)
- [coords](Departure.md#coords)
- [id](Departure.md#id)
- [name](Departure.md#name)
- [position](Departure.md#position)

## Constructors

### constructor

• **new Departure**(`input`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `FlightPlanInput` |

#### Defined in

models/Departure.ts:45

## Properties

### altitude

• **altitude**: `number`

The departure airport's altitude

**`memberof`** Departure

#### Defined in

models/Departure.ts:43

___

### coords

• **coords**: [`number`, `number`]

The coordinates [lon, lat] of the departure airport

**`memberof`** Departure

#### Defined in

models/Departure.ts:27

___

### id

• **id**: `string`

The ICAO ID of the departure airport

**`memberof`** Departure

#### Defined in

models/Departure.ts:11

___

### name

• **name**: `string`

The name of the departure airport

**`memberof`** Departure

#### Defined in

models/Departure.ts:19

___

### position

• `Optional` **position**: `string`

The starting position (gate, parking...)

**`memberof`** Departure

#### Defined in

models/Departure.ts:35
