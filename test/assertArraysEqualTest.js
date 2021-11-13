const assertArraysEqual = require('../assertArraysEqual');
const assert = require('chai').assert;

describe("#assertArraysEqual", () => {
  it("returns true for [1, 2, 3] and [1, 2, 3]", () => {
    assert.deepEqual(assertArraysEqual([1, 2, 3], [1, 2, 3]), true);
  });
  it("returns false for [1, 2, 3, 4, 5] and [1]", () => {
    assert.isFalse(assertArraysEqual([1, 2, 3, 4, 5], [1]), false);
  });
  it("returns true for ['happy', 'shall', 'we', 'be'] and ['happy', 'shall', 'we', 'be']", () => {
    assert.deepEqual(assertArraysEqual(['happy', 'shall', 'we', 'be'], ['happy', 'shall', 'we', 'be']), true);
  });
});
