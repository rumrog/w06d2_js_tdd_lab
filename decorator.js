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

Decorator.prototype.calculateTotalCapacity = function () {
  let totalCapacity = 0
  for (const paintCan of this.stock) {
    totalCapacity += paintCan.capacity
  }
  return totalCapacity
}

Decorator.prototype.canPaint = function (room) {
  const totalCapacity = this.calculateTotalCapacity() 
  return totalCapacity >= room.area
}

module.exports = Decorator