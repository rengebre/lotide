// Need eqArrays to compare arrays
const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }

  return true;
};

//Function for comparing objects -> does not compare objects of objects
const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }

  for (const key in object1) {
    if (typeof object1[key] !== typeof object2[key]) {
      return false;
    }
    let arrFlag = (Array.isArray(object1[key]) && Array.isArray(object2[key]));
    if (arrFlag && eqArrays(object1[key], object2[key])) {
      continue;
    } else if (object1[key] === object2[key]) {
      continue;
    }
    return false;
  }
  return true;
};

// assert Objects equal function
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`💚️💚️💚️ Assertation Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`💔️💔️💔️ Assertation Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// assertObjectsEqual(ab, ba); // => true

// const abc = { a: "1", b: "2", c: "3" };
// assertObjectsEqual(ab, abc); // => false

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// assertObjectsEqual(cd, dc); // => true

// const cd2 = { c: "1", d: ["2", 3, 4] };
// assertObjectsEqual(cd, cd2); // => false