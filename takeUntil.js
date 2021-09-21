const takeUntil = function(array, callback) {
  let returnArray = [];
  for (const elem of array) {
    if (callback(elem)) {
      return returnArray;
    }

    returnArray.push(elem);
  }
  return returnArray;
};

module.exports = takeUntil;