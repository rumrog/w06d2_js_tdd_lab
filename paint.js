const Paint = function (capacity) {
  this.capacity = capacity
  this.empty = false
}

Paint.prototype.emptyCan = function () {
  return this.empty = true
}

module.exports = Paint