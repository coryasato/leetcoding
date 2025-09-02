// 201. Bitwise AND of Numbers Range - https://leetcode.com/problems/bitwise-and-of-numbers-range/

// Given two integers left and right that represent the range [left, right], return the bitwise AND of all numbers in this range, inclusive.

// Example 1:
// Input: left = 5, right = 7
// Output: 4

// Example 2:
// Input: left = 0, right = 0
// Output: 0

// Example 3:
// Input: left = 1, right = 2147483647
// Output: 0

const rangeBitwiseAnd = (left, right) => {
  let res = left;

  for (let i = left+1; i <= right; i++) {
    // Stop the iteration if the bitwise op is zero, it will forever be zero going forward.
    if (res === 0) break;
    res = res & i;
  }

  return res;
};

export default rangeBitwiseAnd;

