// 313. Super Ugly Number - https://leetcode.com/problems/super-ugly-number/

// A super ugly number is a positive integer whose prime factors are in the array primes.

// Given an integer n and an array of integers primes, return the nth super ugly number.

// The nth super ugly number is guaranteed to fit in a 32-bit signed integer.

// Example 1:
// Input: n = 12, primes = [2,7,13,19]
// Output: 32
// Explanation: [1,2,4,7,8,13,14,16,19,26,28,32] is the sequence of the first 12 super ugly numbers given primes = [2,7,13,19].

// Example 2:
// Input: n = 1, primes = [2,3,5]
// Output: 1
// Explanation: 1 has no prime factors, therefore all of its prime factors are in the array primes = [2,3,5].

const nthSuperUglyNumber = (n, primes) => {
  const res = [1];

  let primesCopy = primes.slice(1);
  let queue = [primes[0]];

  while (res.length < n) {
    const num = queue.shift();
    const numPrime = num * 2;

    res.push(num);

    while (primesCopy[0] < numPrime) {
      queue.push(primesCopy[0]);
      primesCopy = primesCopy.slice(1);
    }

    queue.push(numPrime);
  }

  return res[res.length-1];
};

export default nthSuperUglyNumber;
