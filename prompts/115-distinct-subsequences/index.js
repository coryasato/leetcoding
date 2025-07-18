// 115. Distinct Subsequences - https://leetcode.com/problems/distinct-subsequences/

// Given two strings s and t, return the number of distinct subsequences of s which equals t.

// The test cases are generated so that the answer fits on a 32-bit signed integer.

// Example 1:
// Input: s = "rabbbit", t = "rabbit"
// Output: 3
// Explanation:
// As shown below, there are 3 ways you can generate "rabbit" from s.
// rabbbit
// rabbbit
// rabbbit

// Example 2:
// Input: s = "babgbag", t = "bag"
// Output: 5
// Explanation:
// As shown below, there are 5 ways you can generate "bag" from s.
// babgbag
// babgbag
// babgbag
// babgbag
// babgbag

const numDistinct = (s, t) => {
  let res = [];

  const combo = (idx=0, curr='') => {
    if (curr.length === t.length && curr === t) {
      res.push(curr);
      return;
    }

    for (let i = idx; i < s.length; i++) {
      curr += s[i];
      combo(i + 1, curr);
      curr = curr.slice(0, -1);
    }
  };

  combo();
  return res.length;
};

export default numDistinct;
