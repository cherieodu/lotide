const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

describe("#eqObjects", () => {
  it("returns false for eqObjects(ab, ba)", () => {

    const ab = { a: "1", b: [1, 2], c : 1};
    const ba = { b: [1, 2], a: "1" };

    assert.isFalse(eqObjects(ab, ba), false);
  });
});
