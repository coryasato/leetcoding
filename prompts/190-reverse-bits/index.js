// 190. Reverse Bits - https://leetcode.com/problems/reverse-bits/

// Note:
// Note that in some languages, such as Java, there is no unsigned integer type. In this case, both input and output will be given as a signed integer type. They should not affect your implementation, as the integer's internal binary representation is the same, whether it is signed or unsigned.
// In Java, the compiler represents the signed integers using 2's complement notation.

// Example 1:
// Input: n = 43261596
// Output: 964176192

// Example 2:
// Input: n = 2147483644
// Output: 1073741822

// Note: Math.clz32 will return tne amount of padded zeros for a 32 bit int.
const reverseBits = (n) => {
  const bits = '0'.repeat(Math.clz32(n)).concat((n).toString(2));
  return parseInt(bits.split('').reverse().join(''), 2);
};

export default reverseBits;
