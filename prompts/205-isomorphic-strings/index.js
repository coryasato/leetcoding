// 205. Isomorphic Strings - https://leetcode.com/problems/isomorphic-strings/

// Given two strings s and t, determine if they are isomorphic.

// Two strings s and t are isomorphic if the characters in s can be replaced to get t.

// All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

// Example 1:
// Input: s = "egg", t = "add"
// Output: true
// Explanation:
// The strings s and t can be made identical by:
// Mapping 'e' to 'a'.
// Mapping 'g' to 'd'.

// Example 2:
// Input: s = "foo", t = "bar"
// Output: false
// Explanation:
// The strings s and t can not be made identical as 'o' needs to be mapped to both 'a' and 'r'.

// Example 3:
// Input: s = "paper", t = "title"
// Output: true

const isIsomorphic = (s, t) => {
  if (s.length !== t.length) return false;

  const mapS = {};
  const mapT = {};

  for (let i = 0; i < s.length; i++) {
    mapS[s[i]] = (mapS[s[i]] || '').concat(s[i]);
    mapT[t[i]] = (mapT[t[i]] || '').concat(t[i]);
  }

  return Object.values(mapS).length === Object.values(mapT).length;
};

export default isIsomorphic;
