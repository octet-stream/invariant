const test = require("ava")

const invariant = require("./invariant")

class SomeError extends Error {}

test("Should not throw an error when predicate is false", t => {
  t.plan(1)

  const trap = () => invariant(false, "Have no errors")

  t.notThrows(trap)
})

test("invariant.reject shold resolve undefined when predicate is false", t => {
  t.plan(1)

  return t.notThrowsAsync(invariant.reject(false, "Have no errors"))
})

test("Should throw an Error when the second argument is a string", t => {
  t.plan(4)

  const trap = () => invariant(true, "Something's wrong...")

  const err = t.throws(trap)

  t.true(err instanceof Error)
  t.is(err.constructor.name, "Error") // also should be an actual Error instance
  t.is(err.message, "Something's wrong...")
})

test("Should have formatted error message", t => {
  t.plan(2)

  const foo = "foo"

  const trap = () => invariant(true, "Some %s error.", foo)

  const err = t.throws(trap)

  t.is(err.message, `Some ${foo} error.`)
})

test("Should throw an error from given class instance", t => {
  t.plan(3)

  const trap = () => invariant(true, new SomeError("Some error message."))

  const err = t.throws(trap)

  t.true(err instanceof SomeError)
  t.is(err.message, "Some error message.")
})

test("Should throw an error with given class", t => {
  t.plan(3)

  const trap = () => invariant(true, SomeError, "Some %s error message.", "foo")

  const err = t.throws(trap)

  t.true(err instanceof SomeError)
  t.is(err.message, "Some foo error message.")
})

test(
  "invariant.reject should reject promise when predicate is true",
  async t => {
    t.plan(3)

    const err = await t.throwsAsync(
      invariant.reject(true, "Something's wrong...")
    )

    t.true(err instanceof Error)
    t.is(err.message, "Something's wrong...")
  }
)
