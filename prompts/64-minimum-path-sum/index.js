// 64. Minimum Path Sum - https://leetcode.com/problems/minimum-path-sum

// Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right, which minimizes the sum of all numbers along its path.
// Note: You can only move either down or right at any point in time.

// Example 1:
// Input: grid = [[1,3,1],[1,5,1],[4,2,1]]
// Output: 7
// Explanation: Because the path 1 → 3 → 1 → 1 → 1 minimizes the sum.

// Example 2:
// Input: grid = [[1,2,3],[4,5,6]]
// Output: 12

const minPathSum = (matrix) => {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      // Ignore position 0,0
      if (i === 0 && j === 0) continue;

      if (i === 0) {
        // For the first row, sum the current cell and the cell to its left.
        matrix[i][j] += matrix[i][j-1];
      } else if (j === 0) {
        // For the first column, sum the current cell and the cell above it.
        matrix[i][j] += matrix[i-1][j];
      } else {
        // Starting at position 1,1, we now take the lesser value of the cell that is to the left or above the current cell.
        // Since we can only move right or down, this will give us the "lesser" path to the end cell (furthest bottom right).
        matrix[i][j] += Math.min(matrix[i-1][j], matrix[i][j-1]);
      }
    }
  }

  return matrix[matrix.length-1].slice(-1)[0];
};

export default minPathSum;
