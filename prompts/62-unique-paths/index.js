// 62. Unique Paths - https://leetcode.com/problems/unique-paths

// There is a robot on an m x n grid. The robot is initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or right at any point in time.

// Given the two integers m and n, return the number of possible unique paths that the robot can take to reach the bottom-right corner.

// The test cases are generated so that the answer will be less than or equal to 2 * 109.

// Example 1:
// Input: m = 3, n = 7
// Output: 28

// Example 2:
// Input: m = 3, n = 2
// Output: 3
// Explanation: From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
// 1. Right -> Down -> Down
// 2. Down -> Down -> Right
// 3. Down -> Right -> Down

const uniquePaths = (m, n) => {
  // Create a matrix filled with "1"s. We're going to start the loop at index 1 so the row0,col0 will always be 1 across and down.
  const matrix = Array.from(new Array(m), () => Array.from(new Array(n), () => (1)));

  // Calculate each cell by by the sum of the cell above it with the cell to the left of it.
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      matrix[i][j] = matrix[i-1][j] + matrix[i][j-1];
    }
  }
  // The furthest cell to the bottom right will be the sum of all possible moves.
  return matrix[m-1][n-1];
};

export default uniquePaths;
