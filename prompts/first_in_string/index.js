// 28. Find the Index of the First Occurrence in a String - https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/

// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

// Example 1:
// Input: haystack = "sadbutsad", needle = "sad"
// Output: 0
// Explanation: "sad" occurs at index 0 and 6.
// The first occurrence is at index 0, so we return 0.

// Example 2:
// Input: haystack = "leetcode", needle = "leeto"
// Output: -1
// Explanation: "leeto" did not occur in "leetcode", so we return -1.

// First thing I thought of, seconds to implement.
const _firstInString = (haystack, needle) => {
  return parseInt(haystack.search(new RegExp(needle, 'g')), 10);
};

// Guessing the exercise was meant to loop through and do a string match, char by char. Heres me being honest with leetcode.
const firstInString = (haystack, needle) => {
  let index = -1;
  let chain = 0;
  let str = '';

  for (let i = 0; i < haystack.length; i++) {
    const char = haystack[i];

    if (str === needle) break;

    if (chain > 0 && needle[chain] !== char) {
      chain = 0;
      index = -1;
      str = '';
    } else if (needle[chain] === char) {
      str += needle[chain];
      index = (chain === 0) ? i : index;
      chain++;
    }
  }

  return str === needle ? index : -1;
};

export default firstInString;
