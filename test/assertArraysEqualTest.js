const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([], []);
assertArraysEqual([1, 3, 2], [1, 2, 3]);
assertArraysEqual(['ok', 'I', "am"], ['ok', 'I', "am"]);
assertArraysEqual(['ok', 'I', "am"], ['ok', 'i', "am"]);