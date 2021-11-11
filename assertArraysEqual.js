const eqArrays = require('./eqArrays');

const assertArraysEqual = (array1, array2) => {
  let result = eqArrays(array1, array2);
  result === true ? console.log("Both arrays are equal.") : console.log("They aren't equal.");
};

module.exports = assertArraysEqual;