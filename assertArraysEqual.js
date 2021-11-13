const eqArrays = require('./eqArrays');

const assertArraysEqual = (array1, array2) => {
  let result = eqArrays(array1, array2);
  return result;
};

module.exports = assertArraysEqual;