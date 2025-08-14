// 172. Factorial Trailing Zeroes - https://leetcode.com/problems/factorial-trailing-zeroes/

// Given an integer n, return the number of trailing zeroes in n!.

// Note that n! = n * (n - 1) * (n - 2) * ... * 3 * 2 * 1.

// Example 1:
// Input: n = 3
// Output: 0
// Explanation: 3! = 6, no trailing zero.

// Example 2:
// Input: n = 5
// Output: 1
// Explanation: 5! = 120, one trailing zero.

// Example 3:
// Input: n = 0
// Output: 0

// NOTE: Grok code to learn the O(log n) strategy.
// The efficient O(log n) algorithm for counting the number of trailing zeros in n! works by calculating
// the number of factors of 5 in the prime factorization of n! (since there are always more factors of 2 than 5).
// This is done by summing ⌊n / 5⌋ + ⌊n / 25⌋ + ⌊n / 125⌋ + ... until 5^k > n.
//
// For n = 10: ⌊10/5⌋ = 2, ⌊10/25⌋ = 0 (stop). Total: 2 (10! = 3,628,800 has 2 trailing zeros).
// For n = 25: ⌊25/5⌋ = 5, ⌊25/25⌋ = 1, ⌊25/125⌋ = 0 (stop). Total: 6.
// For n = 100: ⌊100/5⌋ = 20, ⌊100/25⌋ = 4, ⌊100/125⌋ = 0 (stop). Total: 24. (Loop runs ~3 times, since log₅(100) ≈ 2.86.)
// For n = 1,000,000: Total: 249,998. (Loop runs ~9 times, since log₅(1,000,000) ≈ 8.58.)
const _trailingZeroes = (n) => {
  let count = 0;
  let k = 5;
  while (k <= n) {
    console.log({q: Math.floor(n / k), n, k, count});
    count += Math.floor(n / k);
    k *= 5;
  }
  return count;
};

// NOTE: This was my initial attempt, but its an O(n) solution due to the factorial recursion.
// The while loop is also not O(log n) since it can iterate "mostly" through the factorial number.
// Calculating the factorial doesn't work well for BigInts and will encrue a large mem stack for them.
const trailingZeroes = (n) => {
  if (n === 0) return 0;

  const factorial = (num) => {
    if (num === 1) return num * 1;
    return num * (factorial(num-1));
  };

  let res = 0;
  let fac = factorial(n);

  // Early return if there are no trailing zeroes.
  if (fac % 10 !== 0) return res;

  while (fac > 0) {
    const lastDigit = fac % 10;

    if (lastDigit === 0) {
      fac = Math.floor(fac / 10);  // Removes last digit
      res++;
    } else {
      break;
    }
  }

  return res;
};

export default trailingZeroes;
