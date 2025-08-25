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

// This function is Gemini code for a bit shift solution.
function _reverseBits(n) {
  let ans = 0;

  for (let i = 0; i < 32; i++) {  // Assuming a 32-bit integer
    // Extract the least significant bit of n
    const bit = (n & 1);
    // Shift 'ans' to the left to make space for the new bit
    ans <<= 1;
    // Add the extracted bit to 'ans'
    if (bit === 1) {
      ans |= 1;
    }
    // Right-shift 'n' to process the next bit
    n >>= 1;
  }

  return ans >>> 0;  // Ensure the result is treated as an unsigned 32-bit integer
}

// Note: Math.clz32 will return tne amount of padded zeros for a 32 bit int.
const reverseBits = (n) => {
  const bits = '0'.repeat(Math.clz32(n)).concat((n).toString(2));
  return parseInt(bits.split('').reverse().join(''), 2);
};

export default reverseBits;
