const assertEqual = (actual, expected) => {
  let isEqual = (actual === expected);
  isEqual === true ? console.log(`✅ Assertion Passed: ${actual} === ${expected}`) : console.log(`⚠️ Assertion Failed: ${actual} !== ${expected}`);
};

const head = array => {
  return array[0];
};

// TEST CODE
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(5, head(["now", "is"]));
assertEqual(1, head([true, 2, 3]));
assertEqual("big", head(["", "bigger", "biggest"]));
assertEqual("lower", head([]));
