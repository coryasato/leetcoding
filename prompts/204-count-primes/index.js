// 204. Count Primes - https://leetcode.com/problems/count-primes/

// Given an integer n, return the number of prime numbers that are strictly less than n.

// Example 1:
// Input: n = 10
// Output: 4
// Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.

// Example 2:
// Input: n = 0
// Output: 0

// Example 3:
// Input: n = 1
// Output: 0

const countPrimes = (n) => {
  let res = 0;

  n--;
  while (n > 1) {
    let sqrt  = Math.round(Math.sqrt(n));
    let counter = 2;
    let isPrime = true;

    while (counter <= sqrt) {
      if (Number.isInteger(n / counter)) {
        isPrime = false;
      }
      counter++;
    }

    if (isPrime) {
      res++;
    }

    n--;
  }

  return res;
};

export default countPrimes;
