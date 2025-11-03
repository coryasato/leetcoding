// 241. Different Ways to Add Parentheses - https://leetcode.com/problems/different-ways-to-add-parentheses

// Given a string expression of numbers and operators, return all possible results from computing all the different possible ways to group numbers and operators. You may return the answer in any order.

// The test cases are generated such that the output values fit in a 32-bit integer and the number of different results does not exceed 104.

// Example 1:
// Input: expression = "2-1-1"
// Output: [0,2]
// Explanation:
// ((2-1)-1) = 0
// (2-(1-1)) = 2

// Example 2:
// Input: expression = "2*3-4*5"
// Output: [-34,-14,-10,-10,10]
// Explanation:
// (2*(3-(4*5))) = -34
// ((2*3)-(4*5)) = -14
// ((2*(3-4))*5) = -10
// (2*((3-4)*5)) = -10
// (((2*3)-4)*5) = 10

const OPERATERS = new Set(['+', '-', '*']);

const _isValid = (str) => {
  const parens = [];

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (char === '(') {
      parens.push(char);
    } else if (char === ')')  {
      parens.pop();
    }
  }

  return parens.length === 0;
};

const _addClosingParens = (str) => {
  const parens = [];
  let operators = 0;
  let s = str;

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (char === '(') {
      parens.push(')');
      continue;
    }

    if (parens.length > 0 && OPERATERS.has(char)) {
      operators++;
      continue;
    }

    if (Number.isInteger(Number(char)) && OPERATERS.has(s[i-1])) {
      s = s.slice(0, i+1).concat((parens.pop() || '')).concat(s.slice(i+1));
      operators--;
    } else if (parens.length > 0 && i === s.length-1 && operators > 0) {
      s = s.concat(parens.pop());
      operators--;
    }
  }

  return s;
};

const _addOpeningParens = (exp, parensCount, startingCursor=0) => {
  let cursor = startingCursor;
  let parens = '('.repeat(parensCount);
  let headParens = '';
  let res = [];
  let str = exp;

  while (parens.length > 0 && cursor < str.length-2) {
    const char = str[cursor];

    if (Number.isInteger(Number(char)) && OPERATERS.has(str[cursor+1])) {
      const entry = str.slice(0, cursor).concat(parens).concat(str.slice(cursor));
      res.push(entry);
    }

    if (cursor === str.length-3) {
      headParens = headParens.concat('(');
      str = headParens.concat(str);
      parens = parens.slice(0, -1);
      cursor = headParens.length;
    }

    cursor++;
  }

  return res;
}

// NOTE: This is very much not optimized and messy and Im sure its wrong.
// Try recursion with tail call.
const diffWaysToCompute = (expression) => {
  const NUM_OPS = Math.floor(expression.length / 2) - 1;
  let entries = [];
  let exp = expression;
  let expHead = '';
  let cursor = 0;

  while (exp.length >= 3) {
    let group = _addOpeningParens(exp, NUM_OPS, cursor);

    group.forEach(subEntry => {
      const entry = expHead.concat(subEntry);

      if (!entries.includes(entry)) {
        entries.push(entry);
      }
    });

    cursor++;
    expHead = exp.slice(0, 2);
    exp = exp.slice(2);
  }
  // console.log({e: [...entries]});
  return entries.map(entry => _addClosingParens(entry))
    .filter(entry => _isValid(entry))
    .map(entry => eval(entry));
};

export default diffWaysToCompute;
