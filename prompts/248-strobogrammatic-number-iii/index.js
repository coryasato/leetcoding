// 248. Strobogrammatic Number III - https://leetcode.com/problems/strobogrammatic-number-iii/

// A strobogrammatic number is a number that looks the same when rotated 180 degrees (looked at upside down).

// Write a function to count the total strobogrammatic numbers that exist in the range of low <= num <= high.

// Example:
// Input: low = "50", high = "100"
// Output: 3
// Explanation: 69, 88, and 96 are three strobogrammatic numbers.

// Note:
// Because the range might be a large number, the low and high numbers are represented as string.

import isStrobogrammatic from "../246-strobogrammatic-number";

const INCLUDE_SET = new Set(['0', '1', '6', '8', '9']);

// NOTE: Iterating through the ranges is going to be slow for very large numbers.
// Think of a better solution.
const isStrobogrammatic3 = (low, high) => {
  const end = parseInt(high);
  let start = parseInt(low);
  let res = 0;

  while (start <= end) {
    const str = start.toString();

    if (INCLUDE_SET.has(str[0]) && isStrobogrammatic(str)) {
      res++;
    }

    start++;
  }

  return res;
};

export default isStrobogrammatic3;
