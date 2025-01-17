// Longest Common Prefix  - https://leetcode.com/problems/longest-common-prefix

// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:
// Input: strs = ["flower","flow","flight"]
// Output: "fl"

// Example 2:
// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

const longestCommonPrefix = (strs) => {
  // Prompt constraint for strs.length and strs[i].length.
  const LEN_CONSTRAINT = 200;
  let res = '';
  let abort = false;

  for (let i = 0; i <= LEN_CONSTRAINT; i++) {
    if (abort) break;

    for (let j = 0; j <= strs.length-1; j++) {
      const letter = strs[j][i];

      if (j === 0) {
        res = res.concat(letter);
        continue;
      }

      if ((j > 0) && letter !== res.slice(-1)) {
        res = res.slice(0, i);
        abort= true;
        break;
      }
    }
  }

  return res;
};

export default longestCommonPrefix;
