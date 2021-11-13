const assertArraysEqual = require('./assertArraysEqual');

const letterPositions = (sentence) => {
  sentence = sentence.split(" ").join("");
  let results = {};

  for (let i = 0; i < sentence.length; i++) {
    let occurences = [];
    if (results[sentence[i]]) {
      results[sentence[i]].push(i);
  } else {
    occurences.push(i)
    results[sentence[i]] = occurences;
  }
  }
  

  return results;
};


//testing results
// assertArraysEqual(letterPositions("hello").e, [1]);
// assertArraysEqual(letterPositions("omega").g, [3]);

module.exports = letterPositions;