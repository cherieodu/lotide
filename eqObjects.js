const assertEqual = (actual, expected) => {
  let isEqual = (actual === expected);
  isEqual === true ? console.log(`✅ Assertion Passed: ${actual} === ${expected}`) : console.log(`⚠️ Assertion Failed: ${actual} !== ${expected}`);
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

const eqObjects = (object1, object2) => {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  } else {
    for (let keys in object1) {
      if (object2[keys]) {
        if ((! Array.isArray(object1[keys])) && (! Array.isArray(object2[keys]))) {
          if (object1[keys] !== object2[keys]) {
            return false;
          }
        } else if ((Array.isArray(object1[keys])) && (Array.isArray(object2[keys]))) {
          if (object1[keys].length !== object2[keys].length) {
            return false;
          } else {
            let result = eqArrays(object1[keys], object2[keys]);
            if (result === false) {
              return false;
            }
          }
        } else {
          return false;
        }
      } else {
        return false;
      }
    } return true;
  }

};

const ab = { a: "1", b: [1, 2], c : 1};
const ba = { b: [1, 2], a: "1" };

//testing
assertEqual(eqObjects(ab, ba), false);