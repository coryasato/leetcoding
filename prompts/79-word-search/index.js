// 79. Word Search - https://leetcode.com/problems/word-search/

// Given an m x n grid of characters board and a string word, return true if word exists in the grid.

// The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.

// Example 1:
// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
// Output: true

// Example 2:
// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
// Output: true

// Example 3:
// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
// Output: false

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
const exist = (board, word) => {
  const wordCopy = word.slice();

  // Find all of the starting indices; we will set "i, j" variables to these ahead of time for each search through.
  let startingIdxs = board.reduce((acc, row, i) => {
    row.forEach((char, j) => {
      if (char === word[0]) {
        acc.push({i, j});
      }
    });
    return acc;
  }, []);
  // Short circuit if the first letter of the word does not exist on the board.
  if (startingIdxs.length === 0) return false;

  let { i, j } = startingIdxs[0];
  let seenMap = {};
  // Remove each startingIdx once assigned to "i, j".
  startingIdxs = startingIdxs.slice(1);

  while (word.length > 0) {
    word = word.slice(1);
    seenMap[`${i}-${j}`] = true;

    // Since we are doing a postitive look-ahead in the logic, if "word" is exhausted here,
    // then we already verified that the last letter is legit; we have completed a positive search.
    if (word.length === 0) break;

    const nextChar = word[0];
    // Search all possible directions to see if the nextChar is available. If so, move towards that index.
    // If not, then either try another pair of starting indices, if they exist.
    // Otherwise, break the loop.
    if ((j+1 < board[i].length) && board[i][j+1] === nextChar && !seenMap.hasOwnProperty([`${i}-${j+1}`])) {  // RIGHT
      j++;
    } else if ((i+1 < board.length) && board[i+1][j] === nextChar && !seenMap.hasOwnProperty([`${i+1}-${j}`])) {  // DOWN
      i++;
    } else if ((j - 1 >= 0) && board[i][j-1] === nextChar && !seenMap.hasOwnProperty([`${i}-${j-1}`])) {  // LEFT
      j--;
    } else if ((i - 1 >= 0) && board[i-1][j]  === nextChar && !seenMap.hasOwnProperty([`${i-1}-${j}`])) {  // UP
      i--;
    } else if (startingIdxs.length > 0) {
      // Reset the search to the next starting indices.
      i = startingIdxs[0].i;
      j = startingIdxs[0].j;
      startingIdxs = startingIdxs.slice(1);
      word = wordCopy;
      seenMap = {};
    } else {
      // Chain is broken.
      break;
    }
  }

  return word.length === 0;
};

export default exist;
