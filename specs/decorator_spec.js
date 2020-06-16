const assert = require('assert')
const Decorator = require('../decorator.js')

describe('Decorator', function () {
  let decorator

  beforeEach(function () {
    decorator = new Decorator([])
  })

  it('should start with an empty paint stock', function () {
    const actual = decorator.stock
    assert.deepStrictEqual(actual, [])
  })

  it('should be able to return stock amount', function () {
    const actual = decorator.stockAmount()
    assert.strictEqual(actual, 0)
  })

  // it('should be able to add a can of paint to paint stock', function () {
  //   decorator.addPaint('Blue')
  //   const actual = decorator.stock
  //   assert.deepStrictEqual(actual, 1)
  // })
})