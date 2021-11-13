const assert = require('chai').assert;
const head = require('../head');

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
  it('returns Hello for ["Hello", "Lighthouse", "Labs"]', () => {
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
  });
  it('returns now for ["now", "is"]', () => {
    assert.strictEqual(head(["now", "is"]), 'now');
  });
  it('returns true for [true, 2, 3]', () => {
    assert.strictEqual(head([true, 2, 3]), true);
  });
  it('returns "" for ["", "bigger", "biggest"]', () => {
    assert.strictEqual(head(["", "bigger", "biggest"]), "");
  });
  it('returns undefined for []', () => {
    assert.isUndefined(head([]));
  });
});

// TEST CODE
// assertEqual(head([5,6,7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
// assertEqual(5, head(["now", "is"]));
// assertEqual(1, head([true, 2, 3]));
// assertEqual("big", head(["", "bigger", "biggest"]));
// assertEqual("lower", head([]));
