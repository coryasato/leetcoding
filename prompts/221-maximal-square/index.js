// 221. Maximal Square - https://leetcode.com/problems/maximal-square/

// Given an m x n binary matrix filled with 0's and 1's, find the largest square containing only 1's and return its area.

// Example 1:
// Input: matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]
// Output: 4

// Example 2:
// Input: matrix = [["0","1"],["1","0"]]
// Output: 1

// Example 3:
// Input: matrix = [["0"]]
// Output: 0

const maximalSquare = (matrix) => {
  let res = 0;

  for (let i = 1; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      const cell = parseInt(matrix[i][j]);
      const leftCell = parseInt(matrix[i][j-1] || -1);
      const upperCell = parseInt(matrix[i-1][j]);

      if (cell === 1 && res === 0) {
        res = 1;
      }

      if (cell >= 1 && upperCell >= 1) {
        const sum = cell + upperCell;
        matrix[i][j] = sum.toString();

        // Loop backwards on the current row to calculate if the current cell is a square.
        // When every N amount of cells equal the contiguous current cell number, then we have a
        // perfect square. (N amount means the current contigous sum of vertical cells)
        // Example: When we have a cell that is currently "2", then the cell to the left of the current cell
        // could also be "2". If this is true then we have a 2 x 2 square. If it were "3", then we'd check
        // the previous 2 cells on the row and both should have cells equaling "3" for a valid square.
        let isSquare = true;
        let counter = sum - 1;
        while (counter > 0) {
          if (matrix[i][j - counter] !== sum.toString()) {
            isSquare = false;
            break;
          }
          counter--;
        }

        if (isSquare) {
          res = Math.max(res, (sum * sum));
        }

      } else if (cell >= 0 && leftCell > 1) {
        // Reset the previous cell because it cannot be chained into a square.
        matrix[i][j-1] = (leftCell - 1).toString();
      }
    }
  }

  return res;
};

export default maximalSquare;
