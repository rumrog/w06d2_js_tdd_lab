const Room = require('./room.js')
const PaintCan = require('./paint_can.js')

const Decorator = function (stock) {
  this.stock = []
}

Decorator.prototype.stockAmount = function () {
  return this.stock.length
}

Decorator.prototype.addPaintCan = function (paint_can) {
  this.stock.push(paint_can)
}

module.exports = Decorator