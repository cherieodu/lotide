const eqObjects = require('./eqObjects');

const assertObjectsEqual = (object1, object2) => {
  const inspect = require('util').inspect;
  const result = eqObjects(object1, object2);
  result === true ? console.log(`✅ Assertion Passed: ${inspect(object1)} === ${inspect(object2)}`) : console.log(`⚠️ Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`);
};

// const ab = { a: "1", b: [1, 2]};
// const ba = { b: [1, 2], a: "1" };

// assertObjectsEqual(ab, ba);

module.exports = assertObjectsEqual;