// 224. Basic Calculator - https://leetcode.com/problems/basic-calculator/

// Given a string s representing a valid expression, implement a basic calculator to evaluate it, and return the result of the evaluation.

// Note: You are not allowed to use any built-in function which evaluates strings as mathematical expressions, such as eval().

// Example 1:
// Input: s = "1 + 1"
// Output: 2

// Example 2:
// Input: s = " 2-1 + 2 "
// Output: 3

// Example 3:
// Input: s = "(1+(4+5+2)-3)+(6+8)"
// Output: 23

const Actions = {
  'add': (a, b) => a + b,
  'sub': (a, b) => a - b,
};

const getAction = (s) => {
  switch(s) {
    case '+':
      return 'add';
    case '-':
      return 'sub';
    default:
      return null;
  }
};

// NOTE: Since this is basic math via add and subtract, we can do this in one sweep and ignore the parens.
// If we needed to build a more complicated calculator where operations within parens mattered first, then we could
// use a stack where each open parens queues a [number, action] tuple in which numbers that follow will mutate until a closing
// parens in found. When we close a parens, we calculate that number into a previous queued tuple if it exists while grabbing the next
// operator/action to queue up with the collapsed entry. If the next char is not an operator and is another closed parens, then repeat the process.
const calculate = (s) => {
  let action = null;
  let value = 0;

  for (var i = 0; i < s.length; i++) {
    let char = s[i];

    if (['+', '-'].includes(char)) {
      action = getAction(char);
      continue;
    }

    // Mutate char, from here forward it must be an Integer.
    char = parseInt(char);
    if (!Number.isInteger(char)) continue;

    value = action !== null ? Actions[action](value, char) : char;
  }

  return value;
};

export default calculate;
