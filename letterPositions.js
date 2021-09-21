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

module.exports = letterPositions;