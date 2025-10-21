// 233. Number of Digit One - https://leetcode.com/problems/number-of-digit-one/

// Given an integer n, count the total number of digit 1 appearing in all non-negative integers less than or equal to n.

// Example 1:
// Input: n = 13
// Output: 6

// Example 2:
// Input: n = 0
// Output: 0

// NOTE: Instead of parsing the ints to a string and counting the unique "1"s. This fn looks at the last digit in the integer
// and tallies a counter if its a Int of 1. Then it shaves off the last digit and repeats the process.
// This is still a O(n) op though as we need to iterate through each digit.
// We can speed this up slightly by doing a map or check on numbers like 2-9 and ignore them, in the teens 10-19 are valid, etc.
const _countOnes = (num) => {
  let count = 0;

  while (num > 0) {
    if (num % 10 === 1) {
      count++;
    }
    num = Math.floor(num / 10);
  }

  return count;
};

const countDigitOne = (n) => {
  let count = 0;

  for (let i = 1; i <= n; i++) {
    count += _countOnes(i);
  }

  return count;
};

export default countDigitOne;
