// 242. Valid Anagram - https://leetcode.com/problems/valid-anagram/

// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// Example 1:
// Input: s = "anagram", t = "nagaram"
// Output: true

// Example 2:
// Input: s = "rat", t = "car"
// Output: false

const isAnagram = (s, t) => {
  const map = {};

  s.split('').forEach(letter => {
    map[letter] = (map[letter] || 0) + 1;
  });

  t.split('').forEach(letter => {
    map[letter] = (map[letter] || 0) - 1;

    if (map[letter] === 0) {
      delete map[letter];
    }
  });

  return Object.keys(map).length === 0;
};

export default isAnagram;
