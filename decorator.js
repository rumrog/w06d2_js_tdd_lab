const Room = require('./room.js')
const Paint = require('./paint.js')

const Decorator = function (stock) {
  this.stock = []
}

Decorator.prototype.stockAmount = function () {
  return this.stock.length
}

module.exports = Decorator