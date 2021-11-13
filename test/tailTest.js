const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("returns [2,3] for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [2,3]);
  });
  it("returns [2, 3, 4, 5] for [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(tail([1, 2, 3, 4, 5]), [2, 3, 4, 5]);
  });
  it("returns ['shall', 'we', 'be'] for ['happy', 'shall', 'we', 'be']", () => {
    assert.deepEqual(tail(['happy', 'shall', 'we', 'be']), ['shall', 'we', 'be']);
  });
});

// // Test Case: Check the original array
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!

// // Test Case 1: Check the returned array elements
// let result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result.length, 2); // ensure we get back two elements
// assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
// assertEqual(result[1], "Labs"); // ensure second element is "Labs"
// assertEqual(result[1], "dance");

// // Test Case 1: Check the returned array elements
// result = tail([]);
// assertEqual(result.length, 0);
// assertEqual(result[0], "Lighthouse");
// assertEqual(result[1], "Labs");
