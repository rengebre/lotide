const countOnly = require('../countOnly');
const assertEqual = require('../assertEqual');

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const compObject = { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false };

const result1 = countOnly(firstNames, compObject);

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);