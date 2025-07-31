// 155. Min Stack - https://leetcode.com/problems/min-stack/

// Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

// Implement the MinStack class:

// MinStack() initializes the stack object.
// void push(int val) pushes the element val onto the stack.
// void pop() removes the element on the top of the stack.
// int top() gets the top element of the stack.
// int getMin() retrieves the minimum element in the stack.
// You must implement a solution with O(1) time complexity for each function.

// Example 1:
// Input
// ["MinStack","push","push","push","getMin","pop","top","getMin"]
// [[],[-2],[0],[-3],[],[],[],[]]

// Output
// [null,null,null,null,-3,null,0,-2]

// Explanation
// MinStack minStack = new MinStack();
// minStack.push(-2);
// minStack.push(0);
// minStack.push(-3);
// minStack.getMin(); // return -3
// minStack.pop();
// minStack.top();    // return 0
// minStack.getMin(); // return -2

// NOTE: Not sure if using a second array to track the minimum elements coming in is allowable (its O(1) time complexity), but
// the reason is so that we can track not just the minimum value seen, but the ones prior to it as well. The last item in minStack will
// always be the minimum element seen. When we pop, we check if what we're removing from the stack is also the last minimum element, and if
// so, then the next lesser element is now the main minimum element. We cannot do this with referencing a sole index or value and if we memoized {value: index} in
// a hash map; then we'd lose order since objects do not garuantee a sorted order in their keys (we'd bleed over to O(N) for re-sorts on mutations of the stack).
// Also, the hashMap indexing won't allow for duplicate values.
class minStack {
  constructor() {
    this.minStack = [];
    this.stack = [];
  }

  push(val) {
    this.stack.push(val);

    // Note: Using lesser | equal to allow for duplicate integers.
    if (this.minStack.length === 0 || (val <= this.minStack[this.minStack.length-1])) {
      this.minStack.push(val);
    }

    return null;
  }

  pop() {
    const item = this.stack.pop();

    if (this.minStack[this.minStack.length-1] === item) {
      this.minStack.pop();
    }

    return null;
  }

  top() {
    return this.stack[this.stack.length-1];
  }

  getMin() {
    return this.minStack[this.minStack.length-1];
  }
};

export default minStack;
