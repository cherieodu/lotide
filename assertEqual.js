
const assertEqual = (actual, expected) => {
  let isEqual = (actual === expected);
  isEqual === true ? console.log(`✅ Assertion Passed: ${actual} === ${expected}`) : console.log(`⚠️ Assertion Failed: ${actual} !== ${expected}`);
};

module.exports = assertEqual;
