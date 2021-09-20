const tail = require('../tail');
const assert = require('chai').assert;

const testArray = ["Hello", "Lighthouse", "Labs"];
const result = tail(testArray);

describe("#tail", () =>{
  it('should return correct number of elements', () => {
    assert.strictEqual(result.length, 2);
  });

  it('should return the tail of the array', () => {
    assert.deepEqual(result, ["Lighthouse", "Labs"]);
  });

  it('original array should be unchanged', () => {
    assert.deepEqual(testArray, ["Hello", "Lighthouse", "Labs"]);
  });
});