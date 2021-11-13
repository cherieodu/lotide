const assertEqual = require('./assertEqual');

const countLetters = (sentence) => {
  sentence = sentence.split(" ").join("");
  let toReturn = {};

  for (let letter of sentence) {
    toReturn[letter] ? toReturn[letter] += 1 : toReturn[letter] = 1;
  }

  return toReturn;
};

// let returned = countLetters("lighthouse in the house");

// //Testing results
// assertEqual(returned['h'], 4);

module.exports = countLetters;
