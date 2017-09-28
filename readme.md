# @octetstream/invariant

Declarative errors throwing for Node.js

[![dependencies Status](https://david-dm.org/octet-stream/invariant/status.svg)](https://david-dm.org/octet-stream/invariant)
[![devDependencies Status](https://david-dm.org/octet-stream/invariant/dev-status.svg)](https://david-dm.org/octet-stream/invariant?type=dev)
[![Build Status](https://travis-ci.org/octet-stream/invariant.svg?branch=master)](https://travis-ci.org/octet-stream/invariant)
[![Code Coverage](https://codecov.io/github/octet-stream/invariant/coverage.svg?branch=master)](https://codecov.io/github/octet-stream/invariant?branch=master)

## API

This library have three little bit different APIs:

### `invariant(predicate, error)`
  - **boolean** predicate – a result of some condition. Error will threw if predicate is `true`.
  - **object** error – some error object

### `invatiant(predicate, message[, ...format])`

  - **boolean** predicate – a result of some condition. Error will threw if predicate is `true`.
  - **string** message – an error message
  - **any** format – see more about the format in a [sprintf-js documentation](https://github.com/alexei/sprintf.js)

### `invariant(predicate, Error, message[, ...format])`
  - **boolean** predicate – a result of some condition. Error will threw if predicate is `true`.
  - **Function** Error – custom error class that will be used as an error constructor
  - **string** message – an error message
  - **any** format – see more about the format in a [sprintf-js documentation](https://github.com/alexei/sprintf.js)

## Example

```js
  import invariant from "@octetstream/invariant"

  // some of your code...

  // Will threw a TypeError if "value" is not a string
  invariant(typeof value !== "string", TypeError, "The value should be a string, but given type is: %s", typeof value)

  invariant(typeof value !== "string", "The value should be a string, but given type is: %s", typeof value)

  invariant(typeof value !== "string", new TypeError(`The value should be a string, but given type is: ${typeof value}`))
```
