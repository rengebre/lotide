const findKeyByValue = function(searchObject, value) {
  for (const key in searchObject) {
    if (searchObject[key] === value) {
      return key;
    }
  }
};

module.exports = findKeyByValue;