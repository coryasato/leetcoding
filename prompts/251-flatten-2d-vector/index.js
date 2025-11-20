// 251. Flatten 2D Vector - https://leetcode.com/problems/flatten-2d-vector/

// Design and implement an iterator to flatten a 2d vector. It should support the following operations: next and hasNext.

// Example:

// Vector2D iterator = new Vector2D([[1,2],[3],[4]]);

// iterator.next(); // return 1
// iterator.next(); // return 2
// iterator.next(); // return 3
// iterator.hasNext(); // return true
// iterator.hasNext(); // return true
// iterator.next(); // return 4
// iterator.hasNext(); // return false

// NOTE: This will change how the iretator will need to be called to access the value of the ".next()" call.
// JS Generators will return { value: N, done: Bool }
// The class instance is not the iterator either and we'll need to access it directly (instanceVar[Symbol.instance]()).
// This is just a rendition using a generator for the purpose of piggy backing on its native apis. Kinda cool.
export class Vector2DWithGenerator {
  constructor(arr) {
    this.vector = arr;
    this.i = 0;
    this.j = 0;
  }

  // NOTE: This will not work for subsequent empty arrays.
  // Example: If i is at 0 and the length of this.vector is 3, but the last two entries are empty arrays.
  // A fix will be to either flatMap this.vector excluding empty arrays in the constructor, do a toArray call on the generator ahead of time,
  // or doing a look ahead in this method. The latter would make this method slow and defeat the lazyness of the generator function.
  hasNext() {
    if (this.i < this.vector.length-1) {
      return true;
    } else if (this.i === this.vector.length-1 && this.j < this.vector[this.i].length-1) {
      return true;
    } else {
      return false;
    }
  }

  *[Symbol.iterator]() {
    for (let i = 0; i < this.vector.length; i++) {
      if (this.vector[i].length === 0) continue;

      for (let j = 0; j < this.vector[i].length; j++) {
        this.i = i;
        this.j = j;
        yield this.vector[i][j];
      }
    }
  }
};

// TODO: Define an approach that will match the leetcode prompt.
// This time manually handle the i and j pointers instead of a nested loop.
class Vector2D {};

export default Vector2D;
