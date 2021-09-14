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

// assertArraysEqual([1, 2, 3], [1, 2, 3]);
// assertArraysEqual([], []);
// assertArraysEqual([1, 3, 2], [1, 2, 3]);
// assertArraysEqual(['ok', 'I', "am"], ['ok', 'I', "am"]);
// assertArraysEqual(['ok', 'I', "am"], ['ok', 'i', "am"]);