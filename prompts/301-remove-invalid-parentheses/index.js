// 301. Remove Invalid Parentheses - https://leetcode.com/problems/remove-invalid-parentheses/

// Given a string s that contains parentheses and letters, remove the minimum number of invalid parentheses to make the input string valid.

// Return a list of unique strings that are valid with the minimum number of removals. You may return the answer in any order.

// Example 1:
// Input: s = "()())()"
// Output: ["(())()","()()()"]

// Example 2:
// Input: s = "(a)())()"
// Output: ["(a())()","(a)()()"]

// Example 3:
// Input: s = ")("
// Output: [""]

// Constraints:
// 1 <= s.length <= 25
// s consists of lowercase English letters and parentheses '(' and ')'.
// There will be at most 20 parentheses in s.

const _isValid = (str) => {
  const stack = [];
  let res = true;

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if ((char !== '(') && (char !== ')')) continue;

    if (char === '(') {
      stack.push(char);
    } else if (stack.length > 0 && stack[stack.length-1] === '(') {
      stack.pop();
    } else {
      res = false;
      break;
    }
  }

  return res === false ? false : stack.length === 0;
};

const removeInvalidParentheses = (s) => {
  let level = 0;
  const set = new Set();

  if (_isValid(s)) {
    set.add(s);
  }

  const recurse = (idx, memo='') => {
    if (idx >= s.length) {
      return;
    }

    for (let i = idx; i <= s.length; i++) {
      if ((s[i] !== '(') && (s[i] !== ')')) continue;

      const rest = s.slice(level, level+i).concat(s.slice(level+i+1));

      if (!set.has(rest) && _isValid(rest)) {
        set.add(rest);
      }

      recurse(i+1, rest);

      if (set.size === 0 && rest === memo) {
        level++;
      }
    }
  };

  recurse(0);
  return set.size > 0 ? [...set] : [''];
};

export default removeInvalidParentheses;
