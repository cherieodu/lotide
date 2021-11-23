const eqObjects = require('./eqObjects');
const inspect = require('util').inspect;

const assertObjectsEqual = (object1, object2) => {
  const result = eqObjects(object1, object2);
  result === true ? console.log(`✅ Assertion Passed: ${inspect(object1)} === ${inspect(object2)}`) : console.log(`⚠️ Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`);
};

module.exports = assertObjectsEqual;