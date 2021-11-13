const assertEqual = require('../assertEqual');
const assert = require('chai').assert;


describe("#assertEqual", () => {
  it("returns false for 'Lighthouse Labs' and 'Bootcamp'", () => {
    assert.strictEqual(assertEqual("Lighthouse Labs", "Bootcamp"), false);
  });
  it("returns true for '1' and '1'", () => {
    assert.strictEqual(assertEqual(1,1), true);
  });
  it("returns false for '5' and 'false'", () => {
    assert.strictEqual(assertEqual(5, false), false);
  });
});
