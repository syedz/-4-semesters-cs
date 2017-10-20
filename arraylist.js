/*
  ArrayList

  Good to use if you don't need to delete a lot, and just need to get stuff.
  This is super fast for getting stuff because you know exactly where it's
  going to be in memory.
 */

class ArrayList {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  push(value) {
    this.data[this.length] = value;
    this.length++;
  }

  pop() {
    // const ans = this.data[this.length-1];
    // delete this.data[this.length-1];
    // this.length--;
    //
    // return ans;

    return this.delete(this.length-1);
  }

  get(index) {
    return this.data[index];
  }

  delete(index) {
    const ans = this.data[index];
    this._collapseTo(index);

    return ans;
  }

  _collapseTo(index) {
    for (let i = index; i < this.length; i++) {
      this.data[i] = this.data[i+1];
    }

    delete this.data[this.length-1];
    this.length--;
  }
}

let arrayList = new ArrayList();
arrayList.push('something');
arrayList.push('something new');
arrayList.push('something else new');

// console.log(arrayList);
// console.log(arrayList.get(1));
console.log(arrayList.pop());
arrayList.delete(0);
// console.log(arrayList.get(1));
