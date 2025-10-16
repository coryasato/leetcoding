// 227. Basic Calculator II - https://leetcode.com/problems/basic-calculator-ii/

// Given a string s which represents an expression, evaluate this expression and return its value.

// The integer division should truncate toward zero.

// You may assume that the given expression is always valid. All intermediate results will be in the range of [-231, 231 - 1].

// Note: You are not allowed to use any built-in function which evaluates strings as mathematical expressions, such as eval().

// Example 1:
// Input: s = "3+2*2"
// Output: 7

// Example 2:
// Input: s = " 3/2 "
// Output: 1

// Example 3:
// Input: s = " 3+5 / 2 "
// Output: 5

const ACTIONS = {
  '+': (a, b) => (a + b),
  '-': (a, b) => (a - b),
  '*': (a, b) => (a * b),
  '/': (a, b) => Math.floor(a / b),
};
const PRIORITY_OPERATORS = ['*', '/'];

const calculate = (s) => {
  let opsList = [];

  for (let i = 0; i < s.length; i++) {
    let char = s[i];

    if (char === ' ') continue;

    if (PRIORITY_OPERATORS.includes(char)) {
      const lastInt = parseInt(opsList.pop(), 10);
      let nextInt = null;

      // Find the next number, since the "s" expression is always valid, we can assume empty strings only until the next number.
      while (nextInt === null && i < s.length) {
        i++;
        if (s[i] !== ' ') {
          nextInt = parseInt(s[i], 10);
          break;
        }
      }

      opsList.push(ACTIONS[char](lastInt, nextInt).toString());
    } else {
      opsList.push(char);
    }
  }

  // When there is one item left, then all operators have been completed.
  if (opsList.length === 1) return parseInt(opsList[0], 10);

  // When there are more items in opsList, then we have atleast 3 items (number, operator, number).
  // Seed the result var with the first number and calculate the result with the next two items in the list.
  let res = parseInt(opsList[0], 10);

  for (let i = 1; i < opsList.length; i++) {
    const nextInt = parseInt(opsList[i+1], 10);
    res = ACTIONS[opsList[i]](res, nextInt);
    i++;
  }

  return res;
};

export default calculate;
