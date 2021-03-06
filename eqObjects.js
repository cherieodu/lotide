const eqArrays = require('./eqArrays');

const eqObjects = (object1, object2) => {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  } else {
    for (let keys in object1) {
      if (object2[keys]) {
        if ((! Array.isArray(object1[keys])) && (! Array.isArray(object2[keys]))) {
          if (object1[keys] !== object2[keys]) {
            return false;
          }
        } else if ((Array.isArray(object1[keys])) && (Array.isArray(object2[keys]))) {
          if (object1[keys].length !== object2[keys].length) {
            return false;
          } else {
            let result = eqArrays(object1[keys], object2[keys]);
            if (result === false) {
              return false;
            }
          }
        } else {
          return false;
        }
      } else {
        return false;
      }
    } return true;
  }

};


module.exports = eqObjects;
