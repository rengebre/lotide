const middle = require('../middle');
const assert = require('chai').assert;

describe('#middle', () => {
  it('should return an empty array when passed in an array of 1 element', () => {
    assert.deepEqual(middle([]), []);
  });

  it('should return an empty array when passed in an array of 2 elements', () => {
    assert.deepEqual(middle([1, 2]), []);
  });

  it('should return [2] when passed in [1, 2, 3]', () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });

  it('should return a 2 element array when passed in an array with even number of elements', () => {
    assert.strictEqual(middle([1, 2, 3, 4]).length, 2);
  });

  it('should return [2, 3] when passed in [1, 2, 3, 4]', () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });
});