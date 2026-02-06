// 291. Word Pattern II - https://leetcode.com/problems/word-pattern-ii/

import removeDuplicates from "../remove_duplicates";

// Given a pattern and a string str, find if str follows the same pattern.

// Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty substring in str.

// Example 1:
// Input: pattern = "abab", str = "redblueredblue"
// Output: true

// Example 2:
// Input: pattern = pattern = "aaaa", str = "asdasdasdasd"
// Output: true

// Example 3:
// Input: pattern = "aabb", str = "xyzabcxzyabc"
// Output: false

// Notes:
// You may assume both pattern and str contains only lowercase letters.

// NOTE: Tried an iterative approach and it got really messy. To do so successfully, if we wanted to try it again,
// we would need to memoize ranges for tokens to substrings (do not mutate any of the inputs) and have recovery loops when
// an attempt to assign a token to a substring fails later on. The failures could be end of strings, overlapping ranges, etc.

// Here we utilize recursive backtracking for a cleaner solution.
const wordPattern = (pattern, str) => {
  const recurse = (pIdx, sIdx, tokenMap, substrSet) => {
    // Base case: full match.
    if (pIdx === pattern.length && sIdx === str.length) {
      return true;
    }
    // If cursors are out of sync and we're at the end of one string and not the other, its a negative.
    if (pIdx === pattern.length || sIdx === str.length) {
      return false;
    }

    const token = pattern[pIdx];
    // If we memoized the token to a substring, check for a match in the current range.
    if (tokenMap.hasOwnProperty(token)) {
      const knownSubString = tokenMap[token];

      if (sIdx + knownSubString.length > str.length || str.substring(sIdx, sIdx + knownSubString.length) !== knownSubString) {
        return false;
      }
      // The current range is a match, move the pattern and str cursons forward.
      return recurse(pIdx + 1, sIdx + knownSubString.length, tokenMap, substrSet);
    }

    // The token is not mapped, we need to hunt for possible substrings.
    for (let i = sIdx + 1; i <= str.length; i++) {
      const substr = str.substring(sIdx, i);

      // If the substr is already used by another token, skip this selection range.
      if (substrSet.has(substr)) continue;

      tokenMap[token] = substr;
      substrSet.add(substr);

      const isMatch = recurse(pIdx + 1, i, tokenMap, substrSet);
      if (isMatch) return true;

      delete tokenMap[token];
      substrSet.delete(substr);
    }

    // Return false by default.
    return false;
  };

  return recurse(0, 0, {}, new Set());
};

// console.log(wordPattern('abab', "redblueredblue"));
// console.log(wordPattern('azbab', "redcblueredblue"));
// console.log(wordPattern('abab', "redblueredbluered"));
// console.log(wordPattern('abca', "onetwothreeone"));

// FALSE
// console.log(wordPattern('aabb', "xyzabcxzyabc"));
export default wordPattern;
