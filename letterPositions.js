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

module.exports = letterPositions;