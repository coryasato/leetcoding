/**
  * Reverse Integer - https://leetcode.com/problems/reverse-integer
  *
  * Given a signed 32-bit integer x, return x with its digits reversed.
  * If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
  *
  * Assume the environment does not allow you to store 64-bit integers (signed or unsigned).
  *
  * Example 1:
  *
  * Input: x = 123
  * Output: 321
  * Example 2:
  *
  * Input: x = -123
  * Output: -321
  * Example 3:
  *
  * Input: x = 120
  * Output: 21
*/

// NOTE: Since JS numbers are floating point 64 bit integers, we have to manually convert the input to a 32 bit int to follow the instructions.
// I used the Hex shortcut for the max32BitInt which ignores (integer range [-231, 231 - 1]) in the prompt. To remedy this,
// simply "sign" the i32 var and check if the int exceeds the negative bound when "sign" is -1 AND conditinally check if the int exceeds the upper bound minus one before
// returning the result.
const reverseIntegerWithComments = (x) => {
  const sign = Math.sign(x);  // Returns 1 or -1
  const max32BitInt = 0x7FFFFFFF;  // The largest i32 value allowed in Hexedecimal (Math.pow(2, 31) === 2147483648)

  let i32 = Math.abs(x | 0);  // Signed 32 bit integer via Bitwise OR
  let res = 0;

  // This loop will mutate the i32 variable and pluck off the last chars via a modulus operator and append them to the
  // res variable in sequence.
  while (i32 > 0) {
    // If x === 123
    // First loop: (0 * 10) + (123 % 10) | res = (0 + 3)   3
    // Second loop (3 * 10) + (12 % 10)  | res = (30 + 2)  32
    // Third loop (32 * 10) + (1 % 10)   | res = (320 + 1) 321
    res = (res * 10) + (i32 % 10);

    // First loop: 123 / 10 | i32 = 12.3 | floor = 12
    // Second loop: 12 / 10 | i32 = 1.2  | floor = 1
    // Third loop:   1 / 10 | i32 = 0
    i32 = Math.floor(i32 / 10);
  }

  return (res > max32BitInt) ? 0 : (res * sign);
};

// MAIN FN
const reverseInteger = (x) => {
  const sign = Math.sign(x);
  const max32BitInt = 0x7FFFFFFF;

  let i32 = Math.abs(x | 0);
  let res = 0;

  while (i32 > 0) {
    res = (res * 10) + (i32 % 10);
    i32 = Math.floor(i32 / 10);
  }

  return (res > max32BitInt) ? 0 : (res * sign);
};

export default reverseInteger;
