const findKeyByValue = (object, value) => {
  for (let key in object) {
    if (object[key.toString()] === value) {
      return key;
    }
  }
};


module.exports = findKeyByValue;