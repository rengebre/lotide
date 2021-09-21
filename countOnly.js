const countOnly = function(allItems, itemsToCount) {
  let returnObject = {};

  const incrementProperty = function(countObject, stringKey) {
    if (countObject[stringKey] === undefined) {
      return 1;
    }

    return (countObject[stringKey] + 1);
  };

  for (const item of allItems) {
    if (itemsToCount[item]) {
      returnObject[item] = incrementProperty(returnObject, item);
    }
  }

  return returnObject;
};

module.exports = countOnly;