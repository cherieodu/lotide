
const assertEqual = (actual, expected) => {
  let isEqual = (actual === expected);
  isEqual === true ? console.log(`✅ Assertion Passed: ${actual} === ${expected}`) : console.log(`⚠️ Assertion Failed: ${actual} !== ${expected}`);
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(5, false);
assertEqual(1, "yes");
assertEqual(1, true);
