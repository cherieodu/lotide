const eqArrays = require('./eqArrays');

const assertArraysEqual = (array1, array2) => {
  let result = eqArrays(array1, array2);
  result === true ? console.log("Both arrays are equal.") : console.log("They aren't equal.");
};

//test
 
let array1 = [1,2,3,7];
let array2 = [1,2,3,7];
assertArraysEqual(array1, array2); 

module.exports = assertArraysEqual;