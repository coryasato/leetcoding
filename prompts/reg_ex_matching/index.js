// Regular Expression Matching - https://leetcode.com/problems/regular-expression-matching/

// Given an input string s and a pattern p, implement regular expression matching with support for '.' and '*' where:

// '.' Matches any single character.​​​​
// '*' Matches zero or more of the preceding element.

// The matching should cover the entire input string (not partial).

// Example 1:
// Input: s = "aa", p = "a"
// Output: false
// Explanation: "a" does not match the entire string "aa".

// Example 2:
// Input: s = "aa", p = "a*"
// Output: true
// Explanation: '*' means zero or more of the preceding element, 'a'. Therefore, by repeating 'a' once, it becomes "aa".

// Example 3:
// Input: s = "ab", p = ".*"
// Output: true
// Explanation: ".*" means "zero or more (*) of any character (.)".

const isMatch = (str, ptrn) => {
  if (ptrn === '.*') return true;

  let a = 0;
  let b = 0;
  let result = true;

  while (a <= str.length-1) {
    const ptrnChar = ptrn[b];
    const strChar = str[a];

    if (ptrnChar === '.') {
      // Any char match, move both pointers forward.
      a += 1;
      b += 1;
      continue;
    } else if (ptrnChar === '*') {
      const lastPtrnChar = ptrn[Math.max(b-1, 0)];
      const lastStrChar = str[Math.max(a-1, 0)];

      // If the preceeding ptrnChar matches the preceeding strChar (0 or more),
      // advance through the str until the char no longer repeats.
      if (lastPtrnChar === lastStrChar) {
        let tempA = a;
        let tempStrChar = str[tempA];

        while ((lastStrChar === tempStrChar) && (tempA <= str.length-1)) {
          tempA += 1;
          tempStrChar = str[tempA];
        }

        a = tempA;
        b += 1;
      } else {
        result = false;
      }
    } else {
      result = strChar === ptrnChar
      a += 1;
      b += 1;
    }

    if (result === false) break;
  }  // END LOOP

  // If the loop ended with the str cursor outside of its bounds and the ptrn cursor
  // is either at its last index or there are more pattern chars to consume.
  if (a > str.length-1 && b <= ptrn.length-1) {
    // If there are more characters in the ptrn, return false.
    if ((ptrn.length-1 - b) > 0) {
      result = false;
    } else  {
      // There is only one last pattern char to match, if its a "*" then the proceeding
      // char already was a positive match, we return true in this case.
      result = ptrn[b] === '*';
    }
  }

  return result;
};

export default isMatch;
