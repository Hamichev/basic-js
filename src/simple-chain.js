const chainMaker = {
  arr: [],
  getLength() {
    return this.arr.length;
  },
  addLink(value) {
    value='( ${value} )';
    this.arr.push(value);
    return this;
  },
  removeLink(position) {
   if(typeof(position) === 'string' || position< 1 || position>this.getLength()){
    this.arr = [] ; throw new Error();}
    else {this.arr.splice(position-1,1); return this;}
  },
  reverseChain() {
    this.arr.reverse();
    return this;
  },
  finishChain() {
   let str = this.arr.join('~~');
    this.arr = [];
    return str
  }
};

module.exports = chainMaker;
