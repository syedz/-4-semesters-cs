/*
  Binary Search Tree

  Practical use: If have ordered data, and need to be able to search for nodes
  very quickly. Example: auto-complete
 */

class Tree {
  constructor() {
    this.root = null;
  }

  toObject() {
    return this.root;
  }

  add(value) {
    if (this.root === null) {
      // no head, create a new head
      this.root = new Node(value);
      return;
    }

    let current = this.root;
    while(true) {
      if (current.value > value) {
        // go left

        if (current.left) {
          current = current.left;
        } else {
          current.left = new Node(value);
          return;
        }
      } else {
        // go right

        if (current.right) {
          current = current.right;
        } else {
          current.right = new Node(value);
          return;
        }
      }
    }
  }
}

class Node {
  constructor(value, left=null, right=null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}
