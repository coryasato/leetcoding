// 36. Valid Sudoku - https://leetcode.com/problems/valid-sudoku/

// Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

// Each row must contain the digits 1-9 without repetition.
// Each column must contain the digits 1-9 without repetition.
// Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
// Note:

// A Sudoku board (partially filled) could be valid but is not necessarily solvable.
// Only the filled cells need to be validated according to the mentioned rules.

// Example 1
// Output: true
export const board1 = [
  ["5","3",".",".","7",".",".",".","."]
 ,["6",".",".","1","9","5",".",".","."]
 ,[".","9","8",".",".",".",".","6","."]
 ,["8",".",".",".","6",".",".",".","3"]
 ,["4",".",".","8",".","3",".",".","1"]
 ,["7",".",".",".","2",".",".",".","6"]
 ,[".","6",".",".",".",".","2","8","."]
 ,[".",".",".","4","1","9",".",".","5"]
 ,[".",".",".",".","8",".",".","7","9"]
 ];

 // Example 1
// Output: false
 export const board2 = [
  ["8","3",".",".","7",".",".",".","."]
 ,["6",".",".","1","9","5",".",".","."]
 ,[".","9","8",".",".",".",".","6","."]
 ,["8",".",".",".","6",".",".",".","3"]
 ,["4",".",".","8",".","3",".",".","1"]
 ,["7",".",".",".","2",".",".",".","6"]
 ,[".","6",".",".",".",".","2","8","."]
 ,[".",".",".","4","1","9",".",".","5"]
 ,[".",".",".",".","8",".",".","7","9"]
 ];

const _createBufferArr = (num) => new Array(num+1).fill(null);

const _sweepFull = (board, vertical=false) => {
  let isValid = true;
  let arr = _createBufferArr(board.length);

  for (let i = 0; i < board.length; i++) {
    if (!isValid) break;

    for (let y = 0; y < board.length; y++) {
      const num = vertical ? board[y][i] : board[i][y];

      if (num !== '.' && arr[num] !== null) {
        isValid = false;
        break;
      } else if (num !== '.') {
        arr[num] = num;
      }

      if (y === board.length-1) {
        arr = _createBufferArr(board.length);
      }
    }
  }

  return isValid;
};

const _sweepSection = (board, level, start, end) => {
  const LIMIT = 3;
  const block = level * LIMIT;
  let isValid = true;
  let arr = _createBufferArr(board.length);

  for (let i = block; i < (block + LIMIT); i++) {
    if (!isValid) break;

    for (let j = start; j <= end; j++) {
      const num = board[i][j];

      if (num !== '.' && arr[num] !== null) {
        isValid = false;
        break;
      } else if (num !== '.') {
        arr[num] = num;
      }
    }
  }

  return isValid;
};

// NOTE:
// Pretty slow here, brute force strategy as we're sweeping every possibility going full horizontal, then vertical and then again for
// each section.

// Couple thoughts:
// 1. Since we're visiting each node in the first horizonatal sweep, we could take "snapshots" of each section as we loop through the matrix.
//    If a section is fully visited, then check for duplicates or fill in collision maps for each possible section and row (this would take much more memory).
// 2. The helper fns are very similar, we could likely combine them.
const isValidSudoku = (board) => {
  // This will build a matrix of arguments that equate to dimensions to each section.
  // EX. [ [0, 0, 2], [0, 3, 5], [0, 6, 8], ...]
  let sections = [];
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      sections.push([i, j*3, j*3+2]);
    }
  }

  return [
    _sweepFull.bind(null, board),
    _sweepFull.bind(null, board, true),
    ...sections.map(sectionArgs => _sweepSection.bind(null, board, ...sectionArgs))
  ].reduce((acc, fn) => {
    if (acc === false) return acc;
    return fn();
  }, true);
};

export default isValidSudoku;
