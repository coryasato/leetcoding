// 54. Spiral Matrix - https://leetcode.com/problems/spiral-matrix

// Given an m x n matrix, return all elements of the matrix in spiral order.

// Example 1:
// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [1,2,3,6,9,8,7,4,5]

// Example 2:
// Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
// Output: [1,2,3,4,8,12,11,10,9,5,6,7]

// Mutative approach, looping in a clockwise fashion. By mutating the matrix, we don't have to store
// coordinates about how far we are in the loop and we can just keep spiraling to the center while removing
// the "outer shell". When theres nothing left in the matrix, we're done.
const spiralMatrix = (matrix) => {
  let res = [];
  let dir = 0;  // 0: left-right | 1: down | 2: right-left | 3: up

  while (matrix.length > 0) {
    if (dir === 0) {
      // Copy the entire first row over, remove it from matrix.
      res = res.concat(...matrix[0]);
      matrix = matrix.slice(1);
      dir = 1;
    } else if (dir === 1) {
      // Pop the last item of each row moving, "down". This mutates each row.
      for (const row of matrix) {
        res = res.concat(row.pop());
      }
      dir = 2;
    } else if (dir === 2) {
      // Copy the entire last or bottom row, reversing the items, remove row from matrix.
      res = res.concat(...matrix.slice(-1)[0].reverse());
      matrix = matrix.slice(0, -1);
      dir = 3;
    } else if (dir === 3) {
      // Shift the first item from each row moving, "up". This mutates each row.
      for (let i = matrix.length-1; i >= 0; i--) {
        res = res.concat(matrix[i].shift());
      }
      dir = 0;
    }
  }

  return res;
};

export default spiralMatrix;
