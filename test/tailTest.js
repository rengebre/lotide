const tail = require('../tail');
const assertEqual = require('../assertEqual');

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"

console.log("\nTesting original array unchanged");
const array = ["Hello", "Lighthouse", "Labs"];
const tempArray = array;
const result2 = tail(array);
assertEqual(tempArray.length, array.length);
for (let i = 0; i < tempArray.length; i++) {
  assertEqual(tempArray[i], array[i]);
}
