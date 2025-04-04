// 73. Set Matrix Zeroes

// Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.

// You must do it in place.

// Example 1:
// Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
// Output: [[1,0,1],[0,0,0],[1,0,1]]

// Example 2:
// Input: matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
// Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]

// NOTE: To clean this up a bit, we can move the "flip" logic into helper fns.
// Time: O(m * n) | Space: O(1)
const setZeroes = (matrix) => {
  let flipZeroRow = false;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        // Set the zero'ith index of both the row and column to a null flag for processing.
        matrix[0][j] = null;
        matrix[i][0] = null;
        // Flag if we need to turn matrix[0] (the first row) into zeroes.
        if (i === 0) { flipZeroRow = true; }
      }
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (i === 0 && matrix[i][j] === null) {
        // Flip Column
        matrix.forEach(row => {
          row[j] = 0;
        });
        // If we had a zero on the first row initially, then process it once the columns are done.
        if (flipZeroRow && (j === matrix[i].length-1)) {
          matrix[i].forEach((_, idx) => {
            matrix[i][idx] = 0;
          });
        }
      } else if (j === 0 && matrix[i][j] === null) {
        // Flip Row
        matrix[i].forEach((_, idx) => {
          matrix[i][idx] = 0;
        });
      }
    }
  }

  return matrix;
};

export default setZeroes;
