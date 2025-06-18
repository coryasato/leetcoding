// 125. Valid Palindrome - https://leetcode.com/problems/valid-palindrome/

// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

// Example 1:
// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.

// Example 2:
// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.

// Example 3:
// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.


// How it works: (Grok)
// - Subtract 65 (Unicode for 'A') to normalize the range.
// - Use & 0xDF to make it case-insensitive (clears the 6th bit, which differentiates case).
// - Check if the result is ≤ 25 (since A-Z spans 0-25 after normalization).
// - Pros: Extremely fast due to bitwise operations.
// - Cons: Less readable, still limited to A-Z/a-z.
const isLetter = (char) => {
  if (char.length !== 1) return false;
  const code = char.charCodeAt(0);
  return ((code - 65) & 0xDF) <= 25;
};

// Duplicated this to use it instead of toLowerCase() on the equality check.
// Left isLetter alone for the description reference.
const letterToChar = (letter) => ((letter.charCodeAt(0) - 65) & 0xDF);

// NOTE: This is super easy to do with RegExp and filters. I'm trying to find the fastest
// way to implement this in JS. Bitwise Ops and single while loop utilizing two pointers seem
// like the fastest solution. The nested while loops only "fast forward", so they shouldn't be an issue.
const isPalindrome = (s) => {
  let res = true;
  let left = 0;
  let right = s.length-1;

  while (left < right) {
    let leftLetter = s[left];
    let rightLetter = s[right];

    while (!isLetter(leftLetter) && (left < right)) {
      left++;
      leftLetter = s[left];
    }

    while (!isLetter(rightLetter) && (right > left)) {
      right--;
      rightLetter = s[right];
    }

    if (letterToChar(leftLetter) !== letterToChar(rightLetter)) {
      res = false;
      break;
    }
    // Edge case if we have alot of non alpha chars in either side of the string and the
    // pointers overlap. The pointers can never overlap.
    if (right < left || left > right) {
      res = false;
      break;
    }

    left++;
    right--;
  }

  return res;
};

export default isPalindrome;
