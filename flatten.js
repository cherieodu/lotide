const flatten = (array) => {
  let flattened = [];
  for (let item of array) {
    if (Array.isArray(item) === true) {
      for (let element of item) {
        flattened.push(element);
      }
    } else {
      flattened.push(item);
    }
  } return flattened;
};

// console.log(flatten([1, 2, ["yes", 4], 5, [6], ["no", "of course"]]));

module.exports = flatten;