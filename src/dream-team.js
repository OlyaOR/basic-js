const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (Array.isArray(members) === false) {
    return false;
  } else {
    let str = members.map(elem => (typeof(elem) === "string")? elem: '').toString();
    for (let i = 0; i < str.length; i++) {
      if(str[i] === ' ') {
        str = str.replace(str[i], "").toUpperCase();
        i = -1;
      }
    }
  return str.split(',').map(elem => elem[0]).sort().join('').toUpperCase();
  }
};