const flattenDeep = require('../flattenDeep');
const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual(flattenDeep([1, 2, [3, 4, ['a', 'b']], 5, [6]]), [1, 2, 3, 4, 'a', 'b', 5, 6]) // => [1, 2, 3, 4, 'a', 'b', 5, 6]