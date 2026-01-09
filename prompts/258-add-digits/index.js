// 258. Add Digits - https://leetcode.com/problems/add-digits/

// Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.

// Example 1:
// Input: num = 38
// Output: 2
// Explanation: The process is
// 38 --> 3 + 8 --> 11
// 11 --> 1 + 1 --> 2
// Since 2 has only one digit, return it.

// Example 2:
// Input: num = 0
// Output: 0

const _addDigits = (num) => {
  if (num <= 9) return num;

  const sum = num.toString().split('').reduce((acc, n) => acc + parseInt(n), 0);
  return addDigits(sum);
};

// Follow up: Could you do it without any loop/recursion in O(1) runtime?
// Digital root.
const addDigits = (num) => {
  if (num <= 9) return num;

  // Subtract the num arg by one to account for multiples of 9, then we add it back for our result.
  return 1 + (num - 1) % 9;
};

export default addDigits;
