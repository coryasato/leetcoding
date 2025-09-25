// 212. Word Search II - https://leetcode.com/problems/word-search-ii/

// Given an m x n board of characters and a list of strings words, return all words on the board.

// Each word must be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once in a word.

// Example 1:
// Input: board = [["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]], words = ["oath","pea","eat","rain"]
// Output: ["eat","oath"]

// Example 2:
// Input: board = [["a","b"],["c","d"]], words = ["abcb"]
// Output: []

const findWords = (board, words) => {
  // Creates a map of each letter to its x,y coordinates in the matrix. Each letter can have many coordinates.
  // letterMap = { "letter": [ [x,y], [<INT>,<INT>], ... ]}
  const letterMap = {};
  board.forEach((row, i) => {
    row.forEach((letter, j) => {
      letterMap[letter] = (letterMap[letter] || []).concat([[i, j]]);
    });
  });

  // For each word, find all possible coordinates of the first letter.
  // For each letter coordinates, we look directly in the board (O(1)) to see if we can can travel to the next letter.
  // If we can, we create a new array of coordinates for the next letter, filtering out any current coordinates that
  // does not have an adjacent letter cell.
  const res = [];
  words.forEach(word => {
    let idx = 0;
    let matches = letterMap[word[idx]] || [];

    while (matches.length > 0 && idx < word.length) {
      idx++;
      const nextLetter = word[idx];
      const nextMatches = [];

      matches.forEach(pos => {
        const x = pos[1];
        const y = pos[0];

        if (board[y-1] && board[y-1][x] === nextLetter) {
          // UP
          nextMatches.push([y-1, x]);
        } else if (board[y][x+1] && board[y][x+1] === nextLetter) {
          // RIGHT
          nextMatches.push([y, x+1]);
        } else if (board[y+1] && board[y+1][x] === nextLetter) {
          // DOWN
          nextMatches.push([y+1, x]);
        } else if (board[y][x-1] && board[y][x-1] === nextLetter) {
          // LEFT
          nextMatches.push([y, x-1]);
        }
      });
      // Mutate matches for the next letter's coordinates.
      matches = nextMatches;
    }  // END WHILE

    // If the idx equals the word's length, then a complete match has been made, push the word to the results array.
    if (idx === word.length) {
      res.push(word);
    }
  });

  return res;
};

export default findWords;
