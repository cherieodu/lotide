const assertArraysEqual = require('./assertArraysEqual');

const without = (source, itemsToRemove) => {
  let refined = [...source];
  for (let item of itemsToRemove) {
    const index = refined.indexOf(item);
    if (index > -1) {
      refined.splice(index, 1);
    }
  } return refined;
};

// let originalList = ["hello", "world", "lighthouse"];
// console.log(without(originalList, ["lighthouse"]));
// assertArraysEqual(originalList, ["hello", "world", "lighthouse"]);

module.exports = without;