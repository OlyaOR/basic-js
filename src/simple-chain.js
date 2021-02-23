const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (position >= 1 && position <= this.chain.length) {
        this.chain.splice(position - 1, 1);
        return this;
    }
    this.chain = [];
    throw new Error();
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let result = this.chain.join("~~");
    this.chain.length = 0;
    return result;
  }
};

module.exports = chainMaker;
