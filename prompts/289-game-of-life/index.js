// 289. Game of Life - https://leetcode.com/problems/game-of-life/
// Medium
// Topics
// premium lock icon
// Companies
// According to Wikipedia's article: "The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970."

// The board is made up of an m x n grid of cells, where each cell has an initial state: live (represented by a 1) or dead (represented by a 0). Each cell interacts with its eight neighbors (horizontal, vertical, diagonal) using the following four rules (taken from the above Wikipedia article):

// Any live cell with fewer than two live neighbors dies as if caused by under-population.
// Any live cell with two or three live neighbors lives on to the next generation.
// Any live cell with more than three live neighbors dies, as if by over-population.
// Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
// The next state of the board is determined by applying the above rules simultaneously to every cell in the current state of the m x n grid board. In this process, births and deaths occur simultaneously.

// Given the current state of the board, update the board to reflect its next state.

// Note that you do not need to return anything.

// Example 1:
// Input: board = [[0,1,0],[0,0,1],[1,1,1],[0,0,0]]
// Output: [[0,0,0],[1,0,1],[0,1,1],[0,1,0]]

// Example 2:
// Input: board = [[1,1],[1,0]]
// Output: [[1,1],[1,1]]

// NOTE: We can filter out the out of bounds dimensions here to reduce some operations later on.
const _getIndexList = (i, j) => {
  return [
    [i-1, j-1],
    [i-1, j],
    [i-1, j+1],
    [i, j-1],
    [i, j+1],
    [i+1, j-1],
    [i+1, j],
    [i+1, j+1]
  ];
};

const gameOfLife = (board) => {
  const idxsToFlip = [];

  board.forEach((row, i) => {
    row.forEach((cell, j) => {
      const idxList = _getIndexList(i, j);
      let oneCount = 0;

      for (let k = 0; k < idxList.length; k++) {
        const [a, b] = idxList[k];
        // Out of bounds check.
        if (
          a < 0 ||
          a > board.length-1 ||
          b < 0 ||
          b > row.length-1
        ) continue;

        if (board[a][b] === 1) {
          oneCount++;
        }
      }

      if (cell === 1 && (oneCount < 2 || oneCount > 3)) {
        idxsToFlip.push([i, j, 0]);
      } else if (cell === 0 && oneCount === 3) {
        idxsToFlip.push([i, j, 1]);
      }
    });
  });

  idxsToFlip.forEach(([i, j, cell]) => {
    board[i][j] = cell;
  });

  return;
};

export default gameOfLife;
