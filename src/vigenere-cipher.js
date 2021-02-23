const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
    constructor(isReverse) {
      this.isReverse =
        isReverse === true || isReverse === null || isReverse === undefined
          ? false
          : true;
    }
    encrypt(message, key) {
      if (message === undefined || key === undefined) {
        throw new Error();
      }
      let str = message.toUpperCase();
      key = key.toUpperCase();
      let arrCipher = [];
      let result = 0;
      for (let i = 0, j = 0; i < str.length; i++) {
        if (str[i].match(/[A-Z]/) === null) {
          arrCipher.push(str[i]);
        } else if (str.charCodeAt(i) + key.charCodeAt(j % key.length) - 130 < 26) {
          result = str.charCodeAt(i) + key.charCodeAt(j % key.length) - 65;
          arrCipher.push(String.fromCharCode(result));
          j++;
        } else {
          result = str.charCodeAt(i) + key.charCodeAt(j % key.length) - 91;
          arrCipher.push(String.fromCharCode(result));
          j++;
        }
      }
      return !this.isReverse ? arrCipher.join("") : arrCipher.reverse().join("");
    }
  
    decrypt(encryptedMessage, key) {
      if (encryptedMessage === undefined || key === undefined) {
        throw new Error();
      }
      let str = encryptedMessage.toUpperCase();
      key = key.toUpperCase();
      let arrCipher = [];
      let result = 0;
      for (let i = 0, j = 0; i < str.length; i++) {
        if (str[i].match(/[A-Z]/) === null) {
          arrCipher.push(str[i]);
        } else if (str.charCodeAt(i) - key.charCodeAt(j % key.length) < 0) {
          result = str.charCodeAt(i) - key.charCodeAt(j % key.length) + 91;
          arrCipher.push(String.fromCharCode(result));
          j++;
        } else {
          result = str.charCodeAt(i) - key.charCodeAt(j % key.length) + 65;
          arrCipher.push(String.fromCharCode(result));
          j++;
        }
      }
      return !this.isReverse ? arrCipher.join("") : arrCipher.reverse().join("");
    }
}

module.exports = VigenereCipheringMachine;
