// const eqArrays = function(array1, array2) {
//   if (array1.length !== array2.length) {
//     return false;
//   }

//   for (let i = 0; i < array1.length; i++) {
//     if (array1[i] !== array2[i]) {
//       return false;
//     }
//   }

//   return true;
// };

// const assertArraysEqual = function(actual, expected) {
//   if (eqArrays(actual, expected)) {
//     console.log(`💚️💚️💚️ Assertation Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`💔️💔️💔️ Assertation Failed: ${actual} !== ${expected}`);
//   }
// };

// Use recursion to deeply flatten an array
const flatten = function(array) {
  let returnArray = [];
  for (const element of array) {
    if (Array.isArray(element)) {
      let recArray = flatten(element);
      returnArray.push(...recArray);
    } else {
      returnArray.push(element);
    }
  }

  return returnArray;
};

// assertArraysEqual(flatten([1, 2, [3, 4, ['a', 'b']], 5, [6]]), [1, 2, 3, 4, 'a', 'b', 5, 6]) // => [1, 2, 3, 4, 5, 6]