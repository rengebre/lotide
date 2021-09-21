// Use recursion to deeply flatten an array
const flattenDeep = function(array) {
  let returnArray = [];
  for (const element of array) {
    if (Array.isArray(element)) {
      let recArray = flattenDeep(element);
      returnArray.push(...recArray);
    } else {
      returnArray.push(element);
    }
  }

  return returnArray;
};

module.exports = flattenDeep;