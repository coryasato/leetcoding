// Palindrome Number - https://leetcode.com/problems/palindrome-number/
// Given an integer x, return true if x is a  palindrome, and false otherwise.

// Example 1:
// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.

// Example 2:
// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

// Example 3:
// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

const isPalindrome = (x) => {
  if (x < 0 || x < 11) return false;

  const len = Math.ceil(Math.log10(x + 1));

  let clone = x;
  let mirror = 0;
  let pivot = Math.floor(len/2);

  // This will pluck the right-most digits into the mirror variable up until half the length of the number or its pivot (even or odd).
  // The clone variable is mutated as the mirror variable builds forward.
  while (pivot > 0) {
    mirror = (mirror * 10) + (clone % 10);
    clone = Math.floor(clone / 10);
    pivot--;
  }

  // If the length of chars is not even, remove the pivot digit.
  if (len % 2 !== 0) {
    clone = Math.floor(clone / 10);
  }

  return clone === mirror;
};

export default isPalindrome;
