const eqArrays = require("../eqArrays");
const assertEqual = require('../assertEqual');

console.log(eqArrays([[2, 3], [4]], [[2, 3], [4]])); // => true
console.log(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]])); // => false
console.log(eqArrays([[2, 3], [4]], [[2, 3], 4])); // => false

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [1, 3, 3]), false); // => should PASS
assertEqual(eqArrays([1, 2, 3], [1, 2, 3, 9]), false); // => should PASS
assertEqual(eqArrays([], []), true); // => should PASS
assertEqual(eqArrays(['i', 'am'], ['i', 'am']), true); // => should PASS
