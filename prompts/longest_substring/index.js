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

// This function is to debug and list all the substring entries that we find.
const lengthOfLongestSubstringDebug = (str) => {
  const entries = [];
  const strEnd = str.length-1;

  let a = 0;
  let res = '';

  for (let i = 0; i <= str.length-1; i++) {
    const char = str[i];

    if (res.includes(char)) {
      entries.push(str.slice(a, i));
      res = char;
      a = i;
    } else {
      res += char;

      if (i === strEnd) {
        entries.push(res);
      }
    }
  }

  return entries;
};

/**
 * https://www.bigocalc.com/
 * Time complexity is O(n), processsing each character in constant time.
 * Space complexity is O(m).
 */

/**
 * What this doesn't account for is equal length substrings. Naively, this code will return the first longest substring found.
 * EX: "abcabd" will return "abc".
*/
const lengthOfLongestSubstring = (str) => {
  const strEnd = str.length-1;

  let a = 0;
  let answer = '';
  let res = '';

  for (let i = 0; i <= str.length-1; i++) {
    const char = str[i];

    // If we find a repeating character, we're going to store the current substring as a contender.
    // The "a" variable is used as a sliding window to tell us where the next substring starts and
    // the "res" variable gets updated with the current char to seed the new substring.
    if (res.includes(char)) {
      const entry = str.slice(a, i);

      // Update the awnswer if there is a larger substring found.
      if (entry.length > answer.length) {
        answer = entry;
      }

      res = char;
      a = i;
    } else {
      res += char;

      // If we're at the end of the loop, check to see if the current substring is a contender for the answer.
      if (i === strEnd && res.length > answer.length) {
        answer = res;
      }
    }
  }

  return answer;
};

export default lengthOfLongestSubstring;
