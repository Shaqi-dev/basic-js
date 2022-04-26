const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  const { repeatTimes, separator, addition, additionRepeatTimes, additionSeparator } = options;
  const res = [];

  for (let i = 0; i < (repeatTimes ? repeatTimes : 1); i++) {
    if (addition || additionRepeatTimes) {
      const additionArr = [];
      for (let j = 0; j < (additionRepeatTimes ? additionRepeatTimes : 1); j++) {
        additionArr.push(addition + "");
      }
      res.push((str + "") + (additionSeparator ? additionArr.join(additionSeparator) : additionArr.join('|')));
    } else {
      res.push(str + "");
    }
  }

  return separator ? res.join(separator) : res.join('+');
}

module.exports = {
  repeater
};
