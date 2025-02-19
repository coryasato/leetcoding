// 44. Wildcard Matching - https://leetcode.com/problems/wildcard-matching

// Given an input string (s) and a pattern (p), implement wildcard pattern matching with support for '?' and '*' where:

// '?' Matches any single character.
// '*' Matches any sequence of characters (including the empty sequence).
// The matching should cover the entire input string (not partial).

// Example 1:
// Input: s = "aa", p = "a"
// Output: false
// Explanation: "a" does not match the entire string "aa".

// Example 2:
// Input: s = "aa", p = "*"
// Output: true
// Explanation: '*' matches any sequence.

// Example 3:
// Input: s = "cb", p = "?a"
// Output: false
// Explanation: '?' matches 'c', but the second letter is 'a', which does not match 'b'.

const isMatch = (str, ptn) => {
  let result = true;
  let a = 0;
  let b = 0;

  while (a < str.length) {
    const char = str[a];
    const sym = ptn[b];

    if (sym === '*') {
      let aClone = a + 1;
      // If we match a splat symbol, we need to fast forward the str pointer until the char no longer repeats.
      while (aClone <= str.length) {
        if (str[aClone] !== char) {
          a = aClone;
          break;
        }
        aClone++;
      }

      b++;
    } else {
      // If the sym is "?", then ignore any checks and increment both pointers.
      // Otherwise, do a direcet comparison of the str char and symbol.
      if (sym !== '?' && char !== sym) {
        result = false;
        break;
      }
      a++;
      b++;
    }
  }

  // If the ptn pointer was not exhausted, then there were still symbols to consume past the length of the string.
  if (b < ptn.length) return false;
  return result;
};

export default isMatch;
