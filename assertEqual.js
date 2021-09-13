// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("💚️💚️💚️ Assertation Passed: " + actual + " === " + expected);
  } else {
    console.log("💔️💔️💔️ Assertation Failed: " + actual + " !== " + expected);
  }
};

// // TEST CODE
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);
// assertEqual('test string identical', 'test string identical');
// assertEqual('This is correct', 'This Is correct');
// assertEqual(9 - 2, 3 + 4);
// assertEqual(9 - 2 * 2, (9 - 2) * 2);