# @octetstream/invariant

Declarative errors throwing for Node.js

[![dependencies Status](https://david-dm.org/octet-stream/invariant/status.svg)](https://david-dm.org/octet-stream/invariant)
[![devDependencies Status](https://david-dm.org/octet-stream/invariant/dev-status.svg)](https://david-dm.org/octet-stream/invariant?type=dev)
[![Build Status](https://travis-ci.org/octet-stream/invariant.svg?branch=master)](https://travis-ci.org/octet-stream/invariant)
[![Code Coverage](https://codecov.io/github/octet-stream/invariant/coverage.svg?branch=master)](https://codecov.io/github/octet-stream/invariant?branch=master)

## API

This library have a two, a little bit different APIs:

### invatiant(predicate, message[...format])

  - **boolean** predicate – a result of some condition
  - **string** message – an error message
  – *any* format – see more about the format in a [sprintf-js documentation](https://github.com/alexei/sprintf.js)

### invariant(predicate, Error, message[, ...format])
  – **Function** Error – custom error class that will be used as an error constructor

## Example

```js
  import invatiant from "@octetstream/invariant"

  // some of your code...

  // Will threw a TypeError
  invariant(typeof foo === "string", TypeError, "Foo should be a string, but given type is: %s", typeof foo)
```