class MyQueue {
  constructor() {
    this.pushStack = [];
    this.popStack = [];
  }

  /**
   * @param {number}
   * @return {void}
   */
  push(value) {
    this.pushStack.push(value);
  }

  /**
   * @return {number}
   */
  pop() {
    if (!this.popStack.length) {
      while (this.pushStack.length) {
        this.popStack.push(this.pushStack.pop());
      }
    }
    return this.popStack.pop();
  }

  /**
   * @return {number}
   */
  peek() {
    if (!this.popStack.length) {
      while (this.pushStack.length) {
        this.popStack.push(this.pushStack.pop());
      }
    }
    return this.popStack[this.popStack.length - 1];
  }

  /**
   * @return {boolean}
   */
  empty() {
    return !this.pushStack.length && !this.popStack.length;
  }
}
