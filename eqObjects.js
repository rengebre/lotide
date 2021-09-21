const eqArrays = require('./eqArrays');

//Function for comparing objects -> does not compare objects of objects
const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }

  for (const key in object1) {
    if (typeof object1[key] !== typeof object2[key]) {
      return false;
    }
    let arrFlag = (Array.isArray(object1[key]) && Array.isArray(object2[key]));
    if (arrFlag && eqArrays(object1[key], object2[key])) {
      continue;
    } else if (typeof object1[key] === 'object' && eqObjects(object1[key], object2[key])) {
      continue;
    } else if (object1[key] === object2[key]) {
      continue;
    }
    return false;
  }
  return true;
};

module.exports = eqObjects;