const middle = function(array) {
  let middleVal;
  if (array.length <= 2) {
    return [];
  } else {
    middleVal = (array.length - 1) / 2;
  }

  if (Number.isInteger(middleVal)) {
    return [array[middleVal]];
  } else {
    return [array[middleVal - 0.5], array[middleVal + 0.5]];
  }
};

 
module.exports = middle;