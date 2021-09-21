const without = function(sourceArray, itemsToRemove) {
  // create copy of sourceArray to alter
  let returnArray = [...sourceArray];
  for (let item of itemsToRemove) {
    for (let i = 0; i < returnArray.length; i++) {
      if (item === returnArray[i]) {
        returnArray.splice(i, 1);
        // decrement counter so that no values are missed in returnArray
        i--;
      }
    }
  }
  return returnArray;
};

module.exports = without;