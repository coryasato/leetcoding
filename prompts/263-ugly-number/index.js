// 263. Ugly Number - https://leetcode.com/problems/ugly-number/

// An ugly number is a positive integer which does not have a prime factor other than 2, 3, and 5.

// Given an integer n, return true if n is an ugly number.

// Example 1:
// Input: n = 6
// Output: true
// Explanation: 6 = 2 × 3

// Example 2:
// Input: n = 1
// Output: true
// Explanation: 1 has no prime factors.

// Example 3:
// Input: n = 14
// Output: false
// Explanation: 14 is not ugly since it includes the prime factor 7.

const _getPrimeFactors = (n) => {
  let num = n;
  const res = [];

  if (num % 2 === 0) {
    res.push(2);

    while (num % 2 === 0) {
      num = Math.floor(num / 2);
    }
  }

  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) {
      res.push(i);

      while (num % i === 0) {
        num = Math.floor(num / i);
      }
    }
  }

  if (num > 2) {
    res.push(num);
  }

  return res;
};

const UGLY_FACTS = new Set([2, 3, 5]);

const isUgly = (n) => {
  if (n < 0) return false;
  if (n === 1) return true;

  const facts = new Set(_getPrimeFactors(n));
  return facts.difference(UGLY_FACTS).size === 0;
};

export default isUgly;
