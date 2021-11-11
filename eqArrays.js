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

module.exports = eqArrays;

