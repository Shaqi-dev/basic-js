const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const digits = [...`${n}`];

  let max = Math.max(...digits);

  for (let i = 0; i < digits.length; i++) {
    const newArr = [...digits.slice(0, i), ...digits.slice(i + 1)];
    const newNum = +newArr.join('');
    if (newNum > max) max = newNum;
  }

  return max;
}

module.exports = {
  deleteDigit
};
