// 139. Word Break - https://leetcode.com/problems/word-break/

// Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.

// Note that the same word in the dictionary may be reused multiple times in the segmentation.

// Example 1:
// Input: s = "leetcode", wordDict = ["leet","code"]
// Output: true
// Explanation: Return true because "leetcode" can be segmented as "leet code".

// Example 2:
// Input: s = "applepenapple", wordDict = ["apple","pen"]
// Output: true
// Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
// Note that you are allowed to reuse a dictionary word.

// Example 3:
// Input: s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
// Output: false

const wordBreak = (s, wordDict) => {
  let res = false;

  const combo = (words, entry=[]) => {
    if (words.length === 0) {
      const ss = entry.reduce((acc, word) => {
        if (acc.length === 0) return acc;

        const REG_EX = new RegExp(word, 'gi');
        return acc.includes(word) ? acc.replace(REG_EX, '') : acc;
      }, s);

      if (ss.length === 0) {
        res = true;
      }

      return;
    }

    words.forEach((word, i) => {
      entry.push(word);
      combo(words.slice(i+1), entry);
      entry.pop();
    });
  };

  combo(wordDict.slice());
  return res;
};

export default wordBreak;
