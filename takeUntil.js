const assertArraysEqual = require('./assertArraysEqual');

const takeUntil = (array, anonFunction) => {
  let toReturn = [];
  for (let item of array) {
    if (anonFunction(item) === false) {
      toReturn.push(item);
    } else {
      break;
    }
  } return toReturn;
};

// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, x => x < 0);
// assertArraysEqual([1, 2, 5, 7, 2], results1);

// console.log('---');

// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ',');
// assertArraysEqual(["I've", "been", "to", "Hollywood"], results2);

module.exports = takeUntil;