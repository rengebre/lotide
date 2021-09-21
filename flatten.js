const flatten = function(array) {
  let returnArray = [];
  for (const element of array) {
    if (Array.isArray(element)) {
      returnArray.push(...element);
    } else {
      returnArray.push(element);
    }
  }

  return returnArray;
};

module.exports = flatten;