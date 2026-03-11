// 306. Additive Number - https://leetcode.com/problems/additive-number

// An additive number is a string whose digits can form an additive sequence.

// A valid additive sequence should contain at least three numbers. Except for the first two numbers, each subsequent number in the sequence must be the sum of the preceding two.

// Given a string containing only digits, return true if it is an additive number or false otherwise.

// Note: Numbers in the additive sequence cannot have leading zeros, so sequence 1, 2, 03 or 1, 02, 3 is invalid.

// Example 1:
// Input: "112358"
// Output: true
// Explanation:
// The digits can form an additive sequence: 1, 1, 2, 3, 5, 8.
// 1 + 1 = 2, 1 + 2 = 3, 2 + 3 = 5, 3 + 5 = 8

// Example 2:
// Input: "199100199"
// Output: true
// Explanation:
// The additive sequence is: 1, 99, 100, 199.
// 1 + 99 = 100, 99 + 100 = 199

const isAdditiveNumber = (num) => {
  let res = false;

  const recurse = (left, right, numStr) => {
    if (numStr.length === 0) {
      res = true;
      return;
    }

    if (right >= numStr.length) {
      return;
    }

    if (left >= numStr.length) {
      return;
    }

    for (let i = 0; i < numStr.length; i++) {
      const leftNumStr = numStr.slice(0, left);
      const rightNumStr = numStr.slice(left, right);
      const rest = numStr.slice(right);
      const sumStr = (Number(leftNumStr) + Number(rightNumStr)).toString();

      if (rest.length > 0 && rest === sumStr) {
        recurse(left, right, '');
        return;
      } else if (rest.startsWith(sumStr)) {
        const nextLeft = rightNumStr.length;
        const nextRight = nextLeft + sumStr.length;
        recurse(nextLeft, nextRight, numStr.slice(leftNumStr.length));
      } else {
        if (right >= numStr.length) {
          recurse(left+1, left+2, numStr);
        } else {
          recurse(left, right+1, numStr);
        }
      }

    }
  };

  recurse(1, 2, num);

  return res;
};

export default isAdditiveNumber;
