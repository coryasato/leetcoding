// 245. Shortest Word Distance III - https://leetcode.com/problems/shortest-word-distance-iii

// Given a list of words and two words word1 and word2, return the shortest distance between these two words in the list.

// word1 and word2 may be the same and they represent two individual words in the list.

// Example:
// Assume that words = ["practice", "makes", "perfect", "coding", "makes"].

// Input: word1 = “makes”, word2 = “coding”
// Output: 1
// Input: word1 = "makes", word2 = "makes"
// Output: 3

const shortestWordDistance = (wordDict, word1, word2) => {
  let dupeWordIdxUsed = false;
  let w1Idx = -1;
  let w2Idx = -1;
  let res = Number.MAX_SAFE_INTEGER;

  wordDict.forEach((word, idx) => {
    if (word === word1 && dupeWordIdxUsed === false) {

      if (w2Idx >= 0) {
        res = Math.min(Math.abs(w2Idx - idx), res);
      }

      // Flag if the current word1 match is also a word2 match (both args are the same word).
      // The next time we see this word, we want to match the index with word2 in the below else if.
      if (word === word2) {
        dupeWordIdxUsed = true;
      }

      w1Idx = idx;
    } else if (word === word2) {

      if (w1Idx >= 0) {
        res = Math.min(Math.abs(w1Idx - idx), res);
      }

      // Flag off so that we can handle multiple duplicate cases. The next time we see the same word, we
      // want to catch it in the first if block above and then the flag will repeat its on/off for each duplicate.
      if (word === word1 && dupeWordIdxUsed === true) {
        dupeWordIdxUsed = false;
      }

      w2Idx = idx;
    }
  });

  return res;
};

export default shortestWordDistance;
