const assert = require('assert')
const Decorator = require('../decorator.js')
const PaintCan = require('../paint_can.js')

describe('Decorator', function () {
  let decorator

  beforeEach(function () {
    decorator = new Decorator([])
    paint_can1 = new PaintCan(5)
  })

  it('should start with an empty paint stock', function () {
    const actual = decorator.stock
    assert.deepStrictEqual(actual, [])
  })

  it('should be able to return stock amount', function () {
    const actual = decorator.stockAmount()
    assert.strictEqual(actual, 0)
  })

  it('should be able to add a can of paint to paint stock', function () {
    decorator.addPaintCan(paint_can1)
    const actual = decorator.stockAmount()
    assert.strictEqual(actual, 1)
  })

  it('should be able to calculate total litres paint it has in stock', function () {
    decorator.addPaintCan(paint_can1)
    const actual = decorator.calculateTotalCapacity()
    assert.strictEqual(actual, 5)
  })

})