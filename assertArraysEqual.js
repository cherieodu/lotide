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
  result === true? console.log("Both arrays are equal.") : console.log("They aren't equal.")
};

let array1 = process.argv[2];
let array2 = process.argv[3];
assertArraysEqual(array1, array2);