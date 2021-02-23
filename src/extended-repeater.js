const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  const newStr = String(str);
  if (options === undefined){
    return newStr;
  };
  let {repeatTimes = 1, separator = '+', addition = '', additionRepeatTimes = 1, additionSeparator = '|'} = options;
  console.log(repeatTimes);
  if (additionRepeatTimes < 2) {
    return newStr+addition+(separator+newStr+addition).repeat(repeatTimes-1);
  } else {
    const moreAddition = addition+(additionSeparator+addition).repeat(additionRepeatTimes-1)
    return newStr+moreAddition+(separator+newStr+moreAddition).repeat(repeatTimes-1);
  }
};