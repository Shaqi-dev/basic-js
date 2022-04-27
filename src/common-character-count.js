const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const res1 = {};
  const res2 = {};
  
  [...s1].forEach(char => res1[char] ? res1[char] += 1 : res1[char] = 1);
  [...s2].forEach(char => res2[char] ? res2[char] += 1 : res2[char] = 1);

  let result = 0;

  for (let key in res1) {
    if (res2[key]) {
      result += Math.min(res1[key], res2[key]);
    }
  }

  return result;
}

module.exports = {
  getCommonCharacterCount
};
