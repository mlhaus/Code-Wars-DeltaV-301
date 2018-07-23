function cubeOdd(arr) {
  let newArr = arr.filter(val => typeof val === 'number');
  if (arr.length !== newArr.length) {
    return undefined;
  }
  return newArr.filter(val => Math.abs(val % 2) === 1)
    .reduce((acc, val) => acc + Math.pow(val, 3), 0);
}