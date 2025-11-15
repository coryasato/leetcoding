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
const _isStrobogrammatic3 = (low, high) => {
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

const S_MAP = {
  '0': '0',
  '1': '1',
  '6': '9',
  '8': '8',
  '9': '6',
};

// Recursive solution:
// This builds the strings from the middle out and utilizes the previous stacks results and simply
// wraps the key | value pairs around each result. This speeds things up by a lot since we don't visit and assert each number.
// The downside here to the recursive fn is that it builds from zero or one at a time only.
// Meaning the results will only be evens or odds for each call.
// Thus, it forces us to call the fn for each low -> high length of results (two digit for "50", three digit for "100").
const isStrobogrammatic3 = (low, high) => {
  const gen = (n, limit) => {
    if (n === 0) return [''];
    if (n === 1) return ['0', '1', '8'];

    const innerN = gen(n-2, limit);
    const res = [];

    innerN.forEach(num => {
      for (const [key, val] of Object.entries(S_MAP)) {
        if (key === '0' && n > 0) continue;

        res.push(key + num + val);
      }
    });

    return res;
  };

  // NOTE: res could simply be a counter, but I left this as an array to visualize the entries via logs.
  // Another way to optimize is to use findIndex for each generated array that is in low or high lengths
  // and slice them accordingly, then count the left over results.
  const res = [];
  let start = low.length;

  while (start <= high.length) {
    gen(start).forEach(entry => {
      const num = parseInt(entry);

      if (num >= parseInt(low) && num <= parseInt(high)) {
        res.push(entry);
      }
    });

    start++;
  }

  return res.length;
};

export default isStrobogrammatic3;
