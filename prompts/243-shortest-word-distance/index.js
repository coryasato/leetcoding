// LeetCode 243: Shortest Word Distance

// Given an array of strings wordsDict and two different strings that already exist in the array word1 and word2, return the shortest distance between these two words in the list.

// Example 1:
// Input: wordsDict = ["practice", "makes", "perfect", "coding", "makes"], word1 = "coding", word2 = "practice"
// Output: 3
// Explanation: "coding" at index 3, "practice" at index 0 → distance |3-0| = 3

// Example 2:
// Input: wordsDict = ["practice", "makes", "perfect", "coding", "makes"], word1 = "makes", word2 = "coding"
// Output: 1
// Explanation: "makes" at index 1, "coding" at index 3 → distance |3-1| = 2
//              "makes" at index 4, "coding" at index 3 → distance |4-3| = 1
//              Minimum is 1.

const shortestDistance = (wordsDict, word1, word2) => {
  let res = Number.MAX_SAFE_INTEGER;
  let w1Idx = -1;
  let w2Idx = -1;

  wordsDict.forEach((word, i) => {
    if (word === word1) {
      if (w2Idx >= 0) {
        res = Math.min(Math.abs(w2Idx - i), res);
      }
      w1Idx = i;
    } else if (word === word2) {
      if (w1Idx >= 0) {
        res = Math.min(Math.abs(w1Idx - i), res);
      }
      w2Idx = i;
    }
  });

  return res;
};

export default shortestDistance;
