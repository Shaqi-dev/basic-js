const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;  
  },

  addLink(value) {
    value === null ? 
    this.chain.push(`( ${'null'} )`) : 
    this.chain.push(`( ${value.toString()} )`);
    
    return this;
  },

  removeLink(position) {
    if (!this.chain[position - 1] || isNaN(position) || !Number.isInteger(position)) {
      this.chain = [];
      throw new Error(`You can't remove incorrect link!`);
    }

    this.chain = [
      ...this.chain.slice(0, (position - 1)),
      ...this.chain.slice(position, this.chain.length)
    ]

    return this;
  },

  reverseChain() {
    this.chain.reverse();

    return this;
  },

  finishChain() {
    const res = this.chain.join('~~');
    this.chain = [];

    return res;
  }
};

module.exports = {
  chainMaker
};
