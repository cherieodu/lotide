const assertArraysEqual = require('./assertArraysEqual');

const words = ["ground", "control", "to", "major", "tom"];

const map = (array, callback) => {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

// const results1 = map(words, word => word[0]);

//test case
// let check = [];
// for (let item of words) {
//   check.push(item[0]);
// }
// assertArraysEqual(check, results1);

module.exports = map;