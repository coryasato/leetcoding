// 316. Remove Duplicate Letters - https://leetcode.com/problems/remove-duplicate-letters/

// Given a string s, remove duplicate letters so that every letter appears once and only once. You must make sure your result is the smallest in lexicographical order among all possible results.

// Example 1:
// Input: s = "bcabc"
// Output: "abc"

// Example 2:
// Input: s = "cbacdcbc"
// Output: "acdb"

// NOTE: Quick and brute solution.
const removeDuplicateLetters = s => {
  let lowestCharCode = Number.MAX_SAFE_INTEGER;
  let lowestIdx = Number.MAX_SAFE_INTEGER;

  s.split('').forEach((letter, i) => {
    const n = letter.charCodeAt();

    if (n < lowestCharCode) {
      lowestCharCode = n;
      lowestIdx = i;
    }
  });

  const set = new Set();

  s.slice(lowestIdx).split('').forEach(letter => {
    set.add(letter);
  });

  return [...set].join('');
};

export default removeDuplicateLetters;
