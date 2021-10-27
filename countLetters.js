const assertEqual = (actual, expected) => {
  let isEqual = (actual === expected);
  isEqual === true ? console.log(`✅ Assertion Passed: ${actual} === ${expected}`) : console.log(`⚠️ Assertion Failed: ${actual} !== ${expected}`);
};

const countLetters = (sentence) => {
  sentence = sentence.split(" ").join("");
  let toReturn = {};

  for (let letter of sentence) {
    toReturn[letter] ? toReturn[letter] += 1 : toReturn[letter] = 1;
  }

  return toReturn;
};

let returned = countLetters("lighthouse in the house");

//Testing results
assertEqual(returned['h'], 4);