/**
 * Longest Palindromic Substring - https://leetcode.com/problems/longest-palindromic-substring/
 * Given a string s, return the longest palindromic substring in s.
 *
 * Example 1:
 *
 * Input: s = "babad"
 * Output: "bab"
 * Explanation: "aba" is also a valid answer.
 *
 *
 *  Example 2:
 *
 * Input: s = "cbbd"
 * Output: "bb"
 *
 */

// NOTE: This will not work with spaces. The constraints list digits and English letters only.
// The split and reverse ops here will slow this algo down considerably.
const isPalindrome = str => {
  const len = str.length;
  const half = Math.floor(len / 2);

  const first = str.slice(0, half);
  const second = len % 2 === 0 ? str.slice(half) : str.slice(half+1);

  return first === second.split('').reverse().join('');
};
const longestPalindrome = str => {
  const entries = [];
  let temp = '';

  // For each letter, shoot across the string to find a match, pluck the substring and verify if its a palindrome.
  // If the substring is odd, halve the string, ignore the pivot and see if the first half matches the second half in reverse.
  // TODO: For a faster version, we're likely going to need a map and some math.
  for (let i = 0; i <= str.length-1; i++) {
    const char = str[i];
    temp += char;

    for (var j = i + 1; j <= str.length-1; j++) {
      const nextChar = str[j];
      temp += nextChar;

      if (char === nextChar) {
        // Found a palindrome?
        if (isPalindrome(temp)) { entries.push(temp); }
        temp = '';
        break;
      } else if (j === str.length-1) {
        // The character does not repeat in the string, reset the temp var.
        temp = '';
      }
    }
  }

  // TODO: We can use another variable for the answer and check the length for newly found palindromes to update it.
  return entries.sort((a, b) => a.length > b.length ? -1 : 1)[0];
};

export default longestPalindrome;
