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
  result === true ? console.log("Both are equal.") : console.log("They aren't equal.");
};

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
assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("omega").g, [3]);