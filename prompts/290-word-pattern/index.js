// 290. Word Pattern - https://leetcode.com/problems/word-pattern/

// Given a pattern and a string s, find if s follows the same pattern.

// Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s. Specifically:

// Each letter in pattern maps to exactly one unique word in s.
// Each unique word in s maps to exactly one letter in pattern.
// No two letters map to the same word, and no two words map to the same letter.

// Example 1:
// Input: pattern = "abba", s = "dog cat cat dog"
// Output: true
// Explanation:
// The bijection can be established as:
// 'a' maps to "dog".
// 'b' maps to "cat".

// Example 2:
// Input: pattern = "abba", s = "dog cat cat fish"
// Output: false

// Example 3:
// Input: pattern = "aaaa", s = "dog cat cat dog"
// Output: false

const wordPattern = (pattern, s) => {
  const list = s.split(' ');

  if (pattern.length !== list.length) return false;

  const map = new Map();
  let res = true;

  for (let i = 0; i < pattern.length; i++) {
    const char = pattern[i];

    if (!map.has(char)) {
      map.set(char, list[i]);
      continue;
    }

    // From here forward, the char exists in map.
    if (map.get(char) !== list[i]) {
      res = false;
      break;
    }
  }

  return res;
};

export default wordPattern;
