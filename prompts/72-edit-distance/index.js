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

const editDistance = (w1, w2) => {
  let edits = 0;

  for (let i = 0; i < w1.length; i++) {
    if (w1 === w2) break;

    const char1 = w1[i];
    const char2 = w2[i] || null;

    if (char2 === null) {
      w1 = w1.slice(0, i);
      edits++;
      break;
    } else if (char1 !== char2) {
      w1 = w1.slice(0, i) + char2 + w1.slice(i+1);
      edits++;``
    }
  }

  return edits;
};

export default editDistance;
