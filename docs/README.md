plnprsr / [Exports](modules.md)

# plnprsr

Parser for Microsoft Flight Simulator (2020) .PLN flight plan files. Converts between an XML string to a Flight Plan JSON.

## Installation

Using npm:

`npm i plnprsr`

Using yarn:

`yarn add plnprsr`

## Usage

Using CommonJS

```javascript
const {parsePln} = require('plnprsr');
```

Using imports

```javascript
import {parsePln} from 'plnprsr';
```

Then

```javascript
const parsedPlan = parsePln(/*your XML string*/);
```

## Documentation

See [DOCS](./docs/modules.md)

## Other

This package is not affiliated to or endorsed by Microsoft in any way.
