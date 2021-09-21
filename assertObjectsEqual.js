const eqObjects = require('./eqObjects');

// assert Objects equal function
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`💚️💚️💚️ Assertation Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`💔️💔️💔️ Assertation Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

module.exports = assertObjectsEqual;