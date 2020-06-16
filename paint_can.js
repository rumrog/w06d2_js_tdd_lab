const PaintCan = function (capacity) {
  this.capacity = capacity
  this.empty = false
}

PaintCan.prototype.emptyCan = function () {
  return this.empty = true
}

module.exports = PaintCan