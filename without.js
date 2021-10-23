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

const without = (source, itemsToRemove) => {
  let refined = [...source];
  for (let item of itemsToRemove) {
    const index = refined.indexOf(item);
    if (index > -1) {
      refined.splice(index, 1);
    }
  } return refined;
};

let originalList = ["hello", "world", "lighthouse"];
console.log(without(originalList, ["lighthouse"]));
assertArraysEqual(originalList, ["hello", "world", "lighthouse"]);