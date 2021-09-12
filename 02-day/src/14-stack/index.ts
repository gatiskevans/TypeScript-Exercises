/**
 * Stack
 *
 * Create a stack data structure. The stack
 * should be a class with methods 'push', 'pop', and
 * 'peek'.  Adding an element to the stack should
 * store it until it is removed.
 *
 * Examples:
 * const s = new Stack();
 * s.push(1);
 * s.push(2);
 * s.pop(); // returns 2
 * s.pop(); // returns 1
 */

class Stack {
  arr: number[] = [];

  push(n: number): number[] {
    this.arr.push(n);
    return this.arr;
  }

  pop() {
    return this.arr.pop();
  }

  peek(): number {
    return this.arr[this.arr.length - 1];
  }
}

export { Stack };
