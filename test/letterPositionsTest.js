const assert = require('chai').assert;
const letterPositions = require('../letterPositions');

describe("#letterPositions", () => {
  it("returns [1] for letterPositions('hello').e", () => {
    assert.deepEqual(letterPositions("hello").e, [1]);
  });
  it("returns [3] for letterPositions('omega').g", () => {
    assert.deepEqual(letterPositions('omega').g, [3]);
  });
});
