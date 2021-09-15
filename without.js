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

// const without = function(sourceArray, itemsToRemove) {
//   let returnArray = [...sourceArray];

//   for (let i = 0; i < itemsToRemove.length; i++) {
//     returnArray = (returnArray.filter(function(ele) { 
//       return ele !== itemsToRemove[i]; 
//     }));
//   }
//   return returnArray;
// }
// console.log(without([1, 2, 3], [1])) // => [2, 3]
// console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]

// const words = ["hello", "world", "lighthouse"];
// console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);

// console.log(without([1, 2, 1, 1, 1, 3, 5, 6, 8], [1, 6]));
// console.log(without([1, 2, 3, 5], []));
// console.log(without([], [1, 2]));
// console.log(without([1, 2, 4, 5, 6], [1, 2, 3, 4, 5, 6, 7]));

