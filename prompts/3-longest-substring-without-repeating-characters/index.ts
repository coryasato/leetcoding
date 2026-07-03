/**
 * Longest Substring Without Repeating Characters - https://leetcode.com/problems/longest-substring-without-repeating-characters/
 * Given a string s, find the length of the longest substring without repeating characters.
 *
 * Example 1:
 * Input: s = "abcabcbb"
 * Explanation: The answer is "abc", with the length of 3.
 * Output: 3
 * Example 2:
 *
 * Input: s = "bbbbb"
 * Output: 1
 * Explanation: The answer is "b", with the length of 1.
 * Example 3:
 *
 * Input: s = "pwwkew"
 * Output: 3
 * Explanation: The answer is "wke", with the length of 3.
 * Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 *
 */

// This will return the first longest substring.
// Note: We should be able to improve on the speed here somehow instead of having to loop per index + 1.
const lengthOfLongestSubstring = (str: string): string => {
  let candidateSet = new Set<string>();  // For O(1) lookup
  let candidateStr = '';
  let idx = 0;
  let res = '';

  for (let i = idx; i < str.length; i++) {
    const char = str[i]!;

    if (candidateSet.has(char)) {
      // Set res to new longest candidate.
      if (candidateStr.length > res.length) {
        res = candidateStr;
      }

      // Clear the candidate and increment to the next char in our str arg.
      candidateStr = '';
      candidateSet.clear();
      idx++;
      i = idx;
    } else {
      candidateStr += char;
      candidateSet.add(char);

      // If we're at the end of the str and the current candidate is longer than res, set it.
      if (i === str.length-1 && candidateStr.length > res.length) {
        res = candidateStr;
      }
    }
  }

  return res;
};


export default lengthOfLongestSubstring;
