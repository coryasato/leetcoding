// 22. Generate Parentheses - https://leetcode.com/problems/generate-parentheses/

// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

//  Example 1:
// Input: n = 3
// Output: ["((()))","(()())","(())()","()(())","()()()"]

// Example 2:
// Input: n = 1
// Output: ["()"]

const generateParens = (n) => {
  let res = [];

  const recurse = (open, close, str='') => {
    if (open === 0 && close === 0) {
      res.push(str);
      return;
    }

    if (open > 0) {
      recurse(open-1, close, str + '(');
    }

    if (close > open) {
      recurse(open, close-1, str + ')');
    }
  }

  recurse(n, n);
  return res;
};

export default generateParens;
