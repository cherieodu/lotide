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


module.exports = flatten;