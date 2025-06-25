// 130. Surrounded Regions - https://leetcode.com/problems/surrounded-regions/

// You are given an m x n matrix board containing letters 'X' and 'O', capture regions that are surrounded:

// Connect: A cell is connected to adjacent cells horizontally or vertically.
// Region: To form a region connect every 'O' cell.
// Surround: The region is surrounded with 'X' cells if you can connect the region with 'X' cells and none of the region cells are on the edge of the board.
// To capture a surrounded region, replace all 'O's with 'X's in-place within the original board. You do not need to return anything.

// Example 1:
// Input: board = [["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]

// Output: [["X","X","X","X"],["X","X","X","X"],["X","X","X","X"],["X","O","X","X"]]

// Explanation:
// In the above diagram, the bottom region is not captured because it is on the edge of the board and cannot be surrounded.

// Example 2:
// Input: board = [["X"]]

// Output: [["X"]]

const solve = (board) => {
  const set = new Set();
  const getKey = (i, j) => `${i}-${j}`;

  for (let i = 0; i < board.length; i++) {
    const row = board[i];

    for (let j = 0; j < row.length; j++) {
      if (board[i][j] === 'O') {
        let shouldFlip = false;

        // If a preceeding adjacent cell memoized its neighbor, then we should flip the current cell.
        if (set.has(getKey(i, j))) {
          shouldFlip = true;
        }
        // Add to set if adjacent cells are 'O'.
        if (board[i][j+1] === 'O') {
          set.add(getKey(i, j + 1));
          shouldFlip = true;
        }
        if (board[i+1] && board[i+1][j] === 'O') {
          set.add(getKey(i + 1, j));
          shouldFlip = true;
        }
        // Mutate the cell.
        if (shouldFlip) {
          board[i][j] = 'X';
        }
      }
    }
  }
  // NOTE: The prompt says to not return anything, but to make the test suite easier to write, we'll return it here.
  return board;
};

export default solve;
