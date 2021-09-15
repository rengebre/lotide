// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`💚️💚️💚️ Assertation Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`💔️💔️💔️ Assertation Failed: ${actual} !== ${expected}`);
//   }
// };

const countLetters = function(str) {
  let returnObject = {};
  for (const char of str) {
    if (char === " ") {
      continue;
    }

    if (returnObject[char]) {
      returnObject[char] += 1;
    } else {
      returnObject[char] = 1;
    }
  }

  return returnObject;
};

// console.log(countLetters("lighthouse in the house"));
// console.log(countLetters(" "));
// console.log(countLetters("1234"));
// console.log(countLetters(""));
// console.log(countLetters("\\"));
// console.log(countLetters("''"));
// console.log(countLetters("$"));
// console.log(countLetters('Hello, this is Russell\'s code\n'))