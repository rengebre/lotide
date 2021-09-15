const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`💚️💚️💚️ Assertation Passed: ${actual} === ${expected}`);
  } else {
    console.log(`💔️💔️💔️ Assertation Failed: ${actual} !== ${expected}`);
  }
};

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
      continue;
    }
  }
  console.log(returnObject);
  return returnObject;
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);