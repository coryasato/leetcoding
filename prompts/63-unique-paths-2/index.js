// 63. Unique Paths II - https://leetcode.com/problems/unique-paths-ii/

// You are given an m x n integer array grid. There is a robot initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or right at any point in time.

// An obstacle and space are marked as 1 or 0 respectively in grid. A path that the robot takes cannot include any square that is an obstacle.

// Return the number of possible unique paths that the robot can take to reach the bottom-right corner.

// The testcases are generated so that the answer will be less than or equal to 2 * 109.

// Example 1:
// Input: obstacleGrid = [[0,0,0],[0,1,0],[0,0,0]]
// Output: 2
// Explanation: There is one obstacle in the middle of the 3x3 grid above.
// There are two ways to reach the bottom-right corner:
// 1. Right -> Right -> Down -> Down
// 2. Down -> Down -> Right -> Right

// Example 2:
// Input: obstacleGrid = [[0,1],[0,0]]
// Output: 1

const uniquePathsWithObstacles = (matrix) => {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 1) {    // If we hit an obstacle, flip it to zero.
        matrix[i][j] = 0;
      } else {
        if (i === 0 || j === 0) {  // If we're on either 0th index, flip it to one.
          matrix[i][j] = 1;
        } else {                   // We're past the 0th indexes, calculate the paths normally.
          matrix[i][j] = (matrix[i-1][j]) + (matrix[i][j-1]);
        }
      }
    }
  }

  return matrix[matrix.length-1].slice(-1)[0];  // Or, .pop(), I didn't want to mutate the array
};

export default uniquePathsWithObstacles;
