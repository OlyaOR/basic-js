const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let res = [];
  for (let i = 0; i < arr.length; i++){
        if (typeof arr[i] == 'string'){
          switch(arr[i]){
            case '--discard-next': 
            if (i == arr.length - 1) break;
            i++; break;
            case '--discard-prev': 
            if (i == 0) break;
            if (arr[i - 2] != '--discard-next'){
              res.pop(); 
            }break;
            case '--double-next': 
            if (i == arr.length - 1) break;
            res.push(arr[i+1]); break;
            case '--double-prev': 
            if (i == 0) break;
            if (arr[i - 2] != '--discard-next'){
              res.push(arr[i-1]); 
            }break;
            default: res.push(arr[i]); break;
          }
        } else res.push(arr[i]);
  }
  return res;  
};