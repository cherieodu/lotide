const eqArrays = (list1, list2) => {
  if (list1.length === list2.length) {
    for (let i = 0; i < list1.length; i++) {
      if (list1[i] !== list2[i]) {
        return false;
      }
    } return true;
  } else {
    return false;
  }
  
};

const assertArraysEqual = (array1, array2) => {
  let result = eqArrays(array1, array2);
  result === true ? console.log("Both arrays are equal.") : console.log("They aren't equal.");
};

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

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
assertArraysEqual([1, 2, 5, 7, 2], results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArraysEqual(["I've", "been", "to", "Hollywood"], results2);