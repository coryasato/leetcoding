// 50. Pow(x, n) - https://leetcode.com/problems/powx-n/

// Example 1:
// Input: x = 2.00000, n = 10
// Output: 1024.00000

// Example 2:
// Input: x = 2.10000, n = 3
// Output: 9.26100

// Example 3:
// Input: x = 2.00000, n = -2
// Output: 0.25000
// Explanation: 2-2 = 1/22 = 1/4 = 0.25

// Omitting handling the float point precision here, since...Javascript.
// If we needed to hard set a precision, then we can do a: parseFloat(res.toFixed(<INT>)).
const myPow = (x, n) => {
  if (n === 1) return x;
  const res = x * myPow(x, Math.abs(n)-1);
  // When the exponent is negative, divide by 1.
  return n < 0 ? (1 / res) : res;
}

export default myPow;
