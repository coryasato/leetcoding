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

const longestCommonPrefixSlower = (strs) => {
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

// NOTE: Trying to improve the above fn to use a non-nested loop. This strategy mutates the strings per looping cycle.
//       This strategy runs 142M ops/s 3.77% | The slower version runs 135M ops/s 5.02% (JSBench.me)
const longestCommonPrefix = (strs) => {
  let cursor = 0;
  let res = '';

  while (true) {
    const str = strs[cursor];
    const letter = str.slice(0, 1);
    strs[cursor] = str.slice(1);

    // A string was completely removed, all chars will have been matched by now.
    if (str === '') {
      // If we're past the first string, remove the last char that was appended in this loop.
      if (cursor > 0) { res = res.slice(0, -1); }
      break;
    }

    if (cursor === 0) {
      res = res.concat(letter);
    } else if (cursor > 0 && letter !== res.slice(-1)) {
      res = res.slice(0, -1);
      break;
    }

    if (cursor === strs.length-1) {
      cursor = 0;
    } else {
      cursor += 1;
    }
  }

  return res;
};

export default longestCommonPrefix;
