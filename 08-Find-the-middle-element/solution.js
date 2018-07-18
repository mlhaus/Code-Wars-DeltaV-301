var gimme = function (inputArray) {
  let newArr = inputArray.slice(0); // make a copy of the array
  newArr.sort(function(a, b) {
    return a - b;
  })
  return inputArray.indexOf(newArr[1]);
};