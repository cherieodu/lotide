//Test functions
const assertArraysEqual = (array1, array2) => {
  let result = eqArrays(array1, array2);
  result === true ? console.log("Both arrays are equal.") : console.log("They aren't equal.");
};

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

//Middle function
const middle = (list) => {
  let listLength = list.length;
  let isEven = (listLength % 2 === 0);
  let toReturn = [list[((listLength/2)) - 1], list[(listLength/2)]];
  
  return (listLength < 3 ? [] : isEven ? toReturn : [list[Math.floor(listLength/2)]]);

};

//Test Code
assertArraysEqual(middle([1, 2, 3]), [1]);
