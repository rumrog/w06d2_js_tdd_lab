const assert = require('assert')
const Decorator = require('../decorator.js')
const PaintCan = require('../paint_can.js')
const Room = require('../room.js')

describe('Decorator', function () {
  let decorator
  let paint_can1
  let paint_can2
  let room

  beforeEach(function () {
    decorator = new Decorator([])
    paint_can1 = new PaintCan(5)
    paint_can2 = new PaintCan(5)
    room = new Room(10)
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
    decorator.addPaintCan(paint_can2)
    const actual = decorator.calculateTotalCapacity()
    assert.strictEqual(actual, 10)
  })

  it('should be able to calculate whether is has enough paint to paint a room', function () {
    decorator.addPaintCan(paint_can1)
    decorator.addPaintCan(paint_can2)
    const actual = decorator.canPaint(room)
    assert.strictEqual(actual, true)
  })

  // it('should be able to paint room if has enough paint in stock', function () {
  //   decorator.addPaintCan(paint_can1)
  //   decorator.addPaintCan(paint_can2)
  //   decorator.canPaint(room)
  //   const actual = room.painted
  //   assert.strictEqual(actual, true)
  // })

})