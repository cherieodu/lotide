const assertEqual = require('./assertEqual');

const findKey = (object, callback) => {
  for (let key in object) {
    if (callback(object[key]) === true) {
      return key;
    }
  } return undefined;
};

// let result = (findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// }, x => x.stars === 2));

// //testing
// assertEqual(result, "Ora");

module.exports = findKey;
