const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }

  return true;
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`💚️💚️💚️ Assertation Passed: ${actual} === ${expected}`);
  } else {
    console.log(`💔️💔️💔️ Assertation Failed: ${actual} !== ${expected}`);
  }
};

const middle = function(array) {
  let middleVal;
  if (array.length <= 2) {
    return [];
  } else {
    middleVal = (array.length - 1) / 2;
  }

  if (Number.isInteger(middleVal)) {
    return [array[middleVal]];
  } else {
    return [array[middleVal - 0.5], array[middleVal + 0.5]];
  }
}

// console.log(middle([1])) // => []
// console.log(middle([1, 2])) // => []
// console.log(middle([1, 2, 3])) // => [2]
// console.log(middle([1, 2, 3, 4, 5])) // => [3]
// console.log(middle([1, 2, 3, 4])) // => [2, 3]
// console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]
// console.log(middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]));
// console.log(middle([]));

// assertArraysEqual(middle([1]), []);
// assertArraysEqual(middle([1, 2]), []);
// assertArraysEqual(middle([1, 2, 3]), [2]); // => [2]
// assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // => [3]
// assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // => [2, 3]
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // => [3, 4]