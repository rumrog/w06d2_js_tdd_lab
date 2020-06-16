const assert = require('assert')
const PaintCan = require('../paint_can.js')

describe('PaintCan', function () {
  let paint_can1

  beforeEach(function () {
    paint_can1 = new PaintCan(5)
  })

  it('should have a number of litres of paint', function () {
    const actual = paint_can1.capacity
    assert.strictEqual(actual, 5)
  })

  it('should be able to check if it is empty', function () {
    const actual = paint_can1.empty
    assert.strictEqual(actual, false)
  })

  it('should be able to empty itself of paint', function () {
    paint_can1.emptyCan()
    const actual = paint_can1.empty
    assert.strictEqual(actual, true)
  })
})


