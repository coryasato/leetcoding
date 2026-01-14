// 264. Ugly Number II - https://leetcode.com/problems/ugly-number-ii/

// An ugly number is a positive integer whose prime factors are limited to 2, 3, and 5.

// Given an integer n, return the nth ugly number.

// Example 1:
// Input: n = 10
// Output: 12
// Explanation: [1, 2, 3, 4, 5, 6, 8, 9, 10, 12] is the sequence of the first 10 ugly numbers.

// Example 2:
// Input: n = 1
// Output: 1
// Explanation: 1 has no prime factors, therefore all of its prime factors are limited to 2, 3, and 5.

import isUgly from "../263-ugly-number";

// Quick way to utilize the isUgly predicate from the previous challenge.
// Brute force and wasteful, but super quick to write. We can do better.
const nthUglyNumber = (n) => {
  const idx = n - 1;
  const uNums = [1,2,3,4,5,6];

  if (idx < uNums.length) return uNums[idx];

  let counter = uNums[uNums.length-1];
  while (uNums.length <= n) {
    counter++;

    if (isUgly(counter)) {
      uNums.push(counter);
    }
  }

  return uNums[idx];
};

export default nthUglyNumber;
