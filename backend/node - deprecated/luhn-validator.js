'use strict';
// coded in a functional programming style, I would break it into more meaningful and reusable methods
module.exports = num => {
  let arr = (num + '')
    .split('')
    .reverse()
    .map(x => parseInt(x));
  let lastDigit = arr.splice(0, 1)[0];
  let sum = arr.reduce((acc, val, index) => (index % 2 !== 0 ? acc + val : acc + ((val * 2) % 9) || 9), 0);
  sum += lastDigit;

  const validLuhn = sum % 10 === 0;
  return validLuhn;
};