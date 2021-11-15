const assert = require('chai').assert;
const flatten = require('../flatten');


describe("#flatten", () => {
  it("returns [ 1, 2, 'yes', 4, 5, 6, 'no', 'of course' ] for [1, 2, ['yes', 4], 5, [6], ['no', 'of course']]", () => {
    assert.deepEqual(flatten([1, 2, ["yes", 4], 5, [6], ["no", "of course"]]), [ 1, 2, 'yes', 4, 5, 6, 'no', 'of course' ]);
  });
});
