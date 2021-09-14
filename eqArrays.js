const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`💚️💚️💚️ Assertation Passed: ${actual} =
    == ${expected}`);
  } else {
    console.log(`💔️💔️💔️ Assertation Failed: ${actual} !== ${expected}`);
  }
};

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

// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
// assertEqual(eqArrays([1, 2, 3], [1, 3, 3]), false); // => should PASS
// assertEqual(eqArrays([1, 2, 3], [1, 2, 3, 9]), false); // => should PASS
// assertEqual(eqArrays([], []), true); // => should PASS
// assertEqual(eqArrays(['i', 'am'], ['i', 'am']), true); // => should PASS