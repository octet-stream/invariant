const fmt = require("sprintf-js").sprintf
const isFunction = require("lodash.isfunction")
const isString = require("lodash.isstring")

/**
 * @param boolean predicate
 * @param string|Function Err
 * @param any ...format
 */
function invariant(predicate, Err, ...format) {
  if (Boolean(predicate) === false) {
    return
  }

  if (isString(Err)) {
    throw new Error(fmt(Err, ...format))
  }

  if (isFunction(Err)) {
    const message = format.shift()

    throw new Err(fmt(message, ...format))
  }

  throw Err
}

module.exports = invariant
module.exports.default = invariant