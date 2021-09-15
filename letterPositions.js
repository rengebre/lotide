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

const letterPositions = function(sentence) {
  const returnObject = {};
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === " ") {
      continue;
    }

    if (returnObject[sentence[i]]) {
      returnObject[sentence[i]].push(i);
    } else {
      returnObject[sentence[i]] = [i];
    }
  }
  return returnObject;
};

// console.log(letterPositions("hello"));
// assertArraysEqual(letterPositions("hello").e, [1]);
// console.log(letterPositions("lighthouse in the house"));