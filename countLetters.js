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

module.exports = countLetters;