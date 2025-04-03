// 72. Edit Distance - https://leetcode.com/problems/edit-distance/

// Given two strings word1 and word2, return the minimum number of operations required to convert word1 to word2.

// You have the following three operations permitted on a word:

// Insert a character
// Delete a character
// Replace a character

// Example 1:
// Input: word1 = "horse", word2 = "ros"
// Output: 3
// Explanation:
// horse -> rorse (replace 'h' with 'r')
// rorse -> rose (remove 'r')
// rose -> ros (remove 'e')

// Example 2:
// Input: word1 = "intention", word2 = "execution"
// Output: 5
// Explanation:
// intention -> inention (remove 't')
// inention -> enention (replace 'i' with 'e')
// enention -> exention (replace 'n' with 'x')
// exention -> exection (replace 'n' with 'c')
// exection -> execution (insert 'u')

// Dynamic programming solution. I followed along a tut for this one.
export const minDistance = (w1, w2) => {
  if (w1.length === 0) return w2.length;

  let matrix = Array.from(new Array(w1.length), () => Array.from(new Array(w2.length), () => 0));
  matrix[0] = matrix[0].map((_, i) => i);
  matrix = matrix.map((arr, i) => {
    arr[0] = i;
    return arr;
  });

  for (let i = 1; i < w1.length; i++) {
    for (let j = 1; j < w2.length; j++) {
      if (w1[i-1] === w2[j-1]) {
        matrix[i][j] = matrix[i-1][j-1];
      } else {
        matrix[i][j] = Math.min(matrix[i-1][j-1], Math.min(matrix[i-1][j], matrix[i][j-1])) +1;
      }
    }
  }

  return matrix[w1.length-1][w2.length-1];
};

// First solution that came to my mind. Not sure why we need to do a DP solution when we can iterate directly?
const editDistance = (w1, w2) => {
  if (w1.length === 0) return w2.length;

  const wordToIterate = w1.length > w2.length ? w1 : w2;
  let edits = 0;

  for (let i = 0; i < wordToIterate.length; i++) {
    if (w1 === w2) break;

    const char1 = w1[i] || null;
    const char2 = w2[i] || null;

    if (char2 === null) {
      w1 = w1.slice(0, i);
      edits++;
      break;
    } else if (w1 === null) {
      w1 = w1 + w2.slice(i);
      edits += w2.length - i;
      break;
    } else if (char1 !== char2) {
      w1 = w1.slice(0, i) + char2 + w1.slice(i+1);
      edits++;
    }
  }

  return edits;
};

export default editDistance;
