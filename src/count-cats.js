const CustomError = require("../extensions/custom-error");

module.exports = function countCats(arr) {
  let cats = arr.flat();
  let counter = 0;
  cats.map(elem => elem === '^^' ? counter += 1: "it isn't cats");
  return counter
};
