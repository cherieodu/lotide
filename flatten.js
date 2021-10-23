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

const flatten = (array) => {
  let flattened = [];
  for (let item of array) {
    if (Array.isArray(item) === true) {
      for (let element of item) {
        flattened.push(element);
      }
    } else {
      flattened.push(item);
    }
  } return flattened;
};

console.log(flatten([1, 2, ["yes", 4], 5, [6], ["no", "of course"]]));