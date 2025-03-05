// 59. Spiral Matrix II - https://leetcode.com/problems/spiral-matrix-ii

// Given a positive integer n, generate an n x n matrix filled with elements from 1 to n2 in spiral order.

// Example 1:
// Input: n = 3
// Output: [[1,2,3],[8,9,4],[7,6,5]]

// Example 2:
// Input: n = 1
// Output: [[1]]

// Strategy: create a matrix of nulls so we know what we have to fill in for each direction.
// We do a look-ahead to see if we're overshooting the array or if the next slot to fill out has already been taken.
// When we're at the "barrier" at whatever direction, then we move the direction accordingly.

// The Space and Time complexity is both O(n^2) beacuse of the matrix creation.
const generateMatrix = (n) => {
  const nums = Array.from(new Array(n*n).keys(), (i) => (i + 1));
  let matrix = Array.from(new Array(n), () => Array.from(new Array(n), () => null));

  let dir = 0;
  let x = 0;
  let y = 0;

  for (const num of nums) {
    matrix[x][y] = num;

    if (dir === 0) {  // LEFT-RIGHT

      if (matrix[x][y+1] !== null) {
        x++;
        dir = 1;
      } else {
        y++;
      }

    } else if (dir === 1) {  // DOWN

      if (matrix[x+1] === undefined || matrix[x+1][y] !== null) {
        y--;
        dir = 2;
      } else {
        x++;
      }

    } else if (dir === 2) {  // RIGHT-LEFT

      if (matrix[x][y-1] !== null) {
        x--;
        dir = 3;
      } else {
        y--;
      }

    } else {  // UP

      if (matrix[x-1][y] !== null) {
        y++;
        dir = 0
      } else {
        x--;
      }
    }
  }

  return matrix;
};

export default generateMatrix;
