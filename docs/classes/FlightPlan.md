[plnprsr](../README.md) / [Exports](../modules.md) / FlightPlan

# Class: FlightPlan

## Table of contents

### Constructors

- [constructor](FlightPlan.md#constructor)

### Properties

- [cruisingAltitude](FlightPlan.md#cruisingaltitude)
- [departure](FlightPlan.md#departure)
- [destination](FlightPlan.md#destination)
- [planType](FlightPlan.md#plantype)
- [route](FlightPlan.md#route)
- [routeType](FlightPlan.md#routetype)
- [sid](FlightPlan.md#sid)
- [star](FlightPlan.md#star)
- [title](FlightPlan.md#title)
- [totalDistance](FlightPlan.md#totaldistance)

## Constructors

### constructor

• **new FlightPlan**(`input`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `FlightPlanInput` |

#### Defined in

models/FlightPlan.ts:90

## Properties

### cruisingAltitude

• **cruisingAltitude**: `number`

The cruising altitude in feet

**`memberof`** FlightPlan

#### Defined in

models/FlightPlan.ts:40

___

### departure

• **departure**: [`Departure`](Departure.md)

The departure airport's details

**`memberof`** FlightPlan

#### Defined in

models/FlightPlan.ts:48

___

### destination

• **destination**: [`Destination`](Destination.md)

The destination airport's details

**`memberof`** FlightPlan

#### Defined in

models/FlightPlan.ts:56

___

### planType

• **planType**: `string`

Whether the plan is VFR, IFR...

**`memberof`** FlightPlan

#### Defined in

models/FlightPlan.ts:24

___

### route

• **route**: [`RouteItem`](RouteItem.md)[]

The route from departure to destination

**`memberof`** FlightPlan

#### Defined in

models/FlightPlan.ts:64

___

### routeType

• **routeType**: `string`

The route type, LowAlt, HighAlt...

**`memberof`** FlightPlan

#### Defined in

models/FlightPlan.ts:32

___

### sid

• `Optional` **sid**: [`Procedure`](Procedure.md)

A departure SID, if any

**`memberof`** FlightPlan

#### Defined in

models/FlightPlan.ts:80

___

### star

• `Optional` **star**: [`Procedure`](Procedure.md)

An arrival STAR, if any

**`memberof`** FlightPlan

#### Defined in

models/FlightPlan.ts:88

___

### title

• **title**: `string`

The title given to the Flight Plan

**`memberof`** FlightPlan

#### Defined in

models/FlightPlan.ts:16

___

### totalDistance

• **totalDistance**: `number`

The total route's distance in nautical miles

**`memberof`** FlightPlan

#### Defined in

models/FlightPlan.ts:72
