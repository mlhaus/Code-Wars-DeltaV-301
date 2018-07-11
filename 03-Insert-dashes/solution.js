function insertDash(num) {
  let result = '';
  while(num > 0) {
    let lastDigit = num % 10;
    num = Math.floor(num / 10);
    let isLastDigit = num === 0; // I have no more digits if num becomes 0
    if(!isLastDigit) {
      let isOddDigit = lastDigit % 2 === 1;
      if(isOddDigit) {
        let nextDigit = num % 10;
        isOddDigit = nextDigit % 2 === 1;
        if(isOddDigit) {
          result = '-' + lastDigit + result;
        }
        else {
          result = lastDigit + result;
        }
      }
      else {
        result = lastDigit + result;
      }
    }
    else {
      result = lastDigit + result;
    }
  }
  return result;
}