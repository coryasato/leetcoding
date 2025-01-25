// 20. Valid Parentheses - https://leetcode.com/problems/valid-parentheses/

// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

// Example 1:
// Input: s = "()"
// Output: true

// Example 2:
// Input: s = "()[]{}"
// Output: true

// Example 3:
// Input: s = "(]"
// Output: false

// Example 4:
// Input: s = "([])"
// Output: true

// This strategy will mutate the str argument, essentially splicing out the matching open/close pairs and resetting the iterable varible to
// backtrack the loop to the previous opening character.
const isValid = (str) => {
  const map = {
    '}': '{',
    ')': '(',
    ']': '['
  };

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (map.hasOwnProperty(char)) {          // Scan until we find a closing char
      if ((str[i-1] || '') !== map[char]) {  // Break immediately if the preceeding char does not match its closing char
        break;
      } else {                               // Remove the valid opening and closing chars, mutate the str var and reset the iterator var 3 chars back
        str = str.slice(0, i-1).concat(str.slice(i+1));
        i = Math.max(i-2, 0);
      }
    }
  }

  return !str.length;
};

export default isValid;
