// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`💚️💚️💚️ Assertation Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`💔️💔️💔️ Assertation Failed: ${actual} !== ${expected}`);
//   }
// };

const tail = function(array) {
  return array.slice(1);
};

// const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result.length, 2); // ensure we get back two elements
// assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
// assertEqual(result[1], "Labs"); // ensure second element is "Labs"

// console.log("\nTesting original array unchanged");
// const array = ["Hello", "Lighthouse", "Labs"];
// const tempArray = array;
// const result2 = tail(array);
// assertEqual(tempArray.length, array.length);
// for (let i = 0; i < tempArray.length; i++) {
//   assertEqual(tempArray[i], array[i]);
// }

// console.log(tail([]));
// console.log(tail([1]));