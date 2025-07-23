// 150. Evaluate Reverse Polish Notation - https://leetcode.com/problems/evaluate-reverse-polish-notation/

// You are given an array of strings tokens that represents an arithmetic expression in a Reverse Polish Notation.

// Evaluate the expression. Return an integer that represents the value of the expression.

// Note that:

// The valid operators are '+', '-', '*', and '/'.
// Each operand may be an integer or another expression.
// The division between two integers always truncates toward zero.
// There will not be any division by zero.
// The input represents a valid arithmetic expression in a reverse polish notation.
// The answer and all the intermediate calculations can be represented in a 32-bit integer.

// Example 1:
// Input: tokens = ["2","1","+","3","*"]
// Output: 9
// Explanation: ((2 + 1) * 3) = 9

// Example 2:
// Input: tokens = ["4","13","5","/","+"]
// Output: 6
// Explanation: (4 + (13 / 5)) = 6

// Example 3:
// Input: tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]
// Output: 22
// Explanation: ((10 * (6 / ((9 + 3) * -11))) + 17) + 5
// = ((10 * (6 / (12 * -11))) + 17) + 5
// = ((10 * (6 / -132)) + 17) + 5
// = ((10 * 0) + 17) + 5
// = (0 + 17) + 5
// = 17 + 5
// = 22

// NOTE: Adding this one just for fun. The main export is the first solution which should be faster since we do
// math inline with intent to avoid "eval". Here we build up a string to make it mirror the prompt's Explanation
// clauses in each example. Then we have to eval the string of course to turn that into executable math. The logic is
// exactly the same in both, this is one is just to see the output as a string and to run eval, as the name of the
// function suggests. :)
const _evalRPN = (tokens) => {
  const REGEX = /[+-/*](?!\d)/;
  const stack = [];
  let equation = '';
  let numsChain = 0;

  for (const token of tokens) {
    if (token.match(REGEX)) {
      if (numsChain > 1) {
        const right = stack.pop();
        const left = stack.pop();
        equation += `(${left} ${token} ${right})`;
      } else {
        equation = numsChain === 1
          ? `(${equation} ${token} ${stack.pop()})`
          : `(${stack.pop()} ${token} ${equation})`;
      }
      numsChain = 0;
    } else {
      numsChain++;
      stack.push(token);
    }
  }
                                      // Tokens: ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]
  console.log({equation});            // (((10 * (6 / ((9 + 3) * -11))) + 17) + 5)
  return Math.round(eval(equation));  // 22
};

const _mathHelper = (operator) => {
  const helpers = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '/': (a, b) => (a / b) | 0,  // Bitwise OR truncates decimals
    '*': (a, b) => a * b,
  };
  return helpers[operator];
};

const evalRPN = (tokens) => {
  const REGEX = /[+-/*](?!\d)/;
  const stack = [];
  let res = 0;
  let numsChain = 0;

  for (const token of tokens) {
    if (token.match(REGEX)) {
      // If we stacked more than 1 numbers in a row, then we have a starting operation with two numbers in the stack.
      // Else if we encountered one number for one operand token, then the res will become the left and the next item on the
      // stack will be the right side of the equation.
      // Else when we hit multiple operand tokens in a row (no numbers between them), then the sides of the equation will flip.
      // Meaning, the item on the stack will be the left and the res will be on the right.
      if (numsChain > 1) {
        const right = stack.pop();
        const left = stack.pop();
        res += _mathHelper(token)(left, right);
      } else if (numsChain === 1) {
        res = _mathHelper(token)(res, stack.pop());
      } else {
        res = _mathHelper(token)(stack.pop(), res);
      }

      // Reset the counter for each "sign" we come across.
      numsChain = 0;
    } else {
      numsChain++;
      stack.push(parseInt(token, 10));
    }
  }

  return res;
};

export default evalRPN;
