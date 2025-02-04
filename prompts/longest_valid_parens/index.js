// 32. Longest Valid Parentheses - https://leetcode.com/problems/longest-valid-parentheses

// Given a string containing just the characters '(' and ')', return the length of the longest valid (well-formed) parentheses substring.

// Example 1:
// Input: s = "(()"
// Output: 2
// Explanation: The longest valid parentheses substring is "()".

// Example 2:
// Input: s = ")()())"
// Output: 4
// Explanation: The longest valid parentheses substring is "()()".

// Example 3:
// Input: s = ""
// Output: 0

const longestValidParentheses = (str) => {
  if (str.length === 0) return 0;

  let chars = [];
  // Loop through to create an array of characters until we find a closing character ")". Once found, loop backwards until
  // we find the first opening character, "(" and toggle both indexes to a "_". If there are no valid opening chars, then
  // its an invalid parens, leave it alone and it will be a chain break (there can be valid parens going forward we need to assess).
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    chars.push(char);

    if (i > 0 && char === ')') {
      let idx = Math.max(i-1, 0);

      while (idx >= 0) {
        if (chars[idx] === '(') {
          chars[idx] = '_';
          chars[i] = '_';
          break;
        }
        idx--;
      }
    }
  }

  let count = 0;
  let result = 0;
  // Count the consecutive "_" pairs that represent open and closing bracked.
  // If we hit any other char, we break the chaining count, reset the count and set the highest count so far in the result var.
  for (let i = 0; i < chars.length; i++) {
    if (chars[i] === '_' && chars[i+1] === '_') {
      count += 2;                               // Count open / close char pair
      i = i + 1;                                // Jump ahead 2 indexes (manual 1 here and the for loop will iterator 1 more)
      if (i === chars.length-1 && count > 0) {  // If we're at the end of the loop, honor the count
        result = Math.max(result, count);
      }
    } else if (chars[i] !== '_') {              // Theres a break in a potential chain, reset if need be
      if (count > 0) {
        result = Math.max(result, count);
        count = 0;
      }
    }
  }

  return result;
};

export default longestValidParentheses;
