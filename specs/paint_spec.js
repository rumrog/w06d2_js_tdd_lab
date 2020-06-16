const assert = require('assert')
const Paint = require('../paint.js')

describe('Paint', function () {
  let paint

  beforeEach(function () {
    paint = new Paint(5)
  })

  it('should be able to check if it is empty', function () {
    const actual = paint.empty
    assert.strictEqual(actual, false)
  })
})
