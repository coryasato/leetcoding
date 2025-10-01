// 214. Shortest Palindrome - https://leetcode.com/problems/shortest-palindrome/

// You are given a string s. You can convert s to a palindrome by adding characters in front of it.

// Return the shortest palindrome you can find by performing this transformation.

// Example 1:
// Input: s = "aacecaaa"
// Output: "aaacecaaa"

// Example 2:
// Input: s = "abcd"
// Output: "dcbabcd"

const shortestPalindrome = (s) => {
  let str = s;
  let left = 0;
  let right = s.length-1;

  while (left <= right) {
    if (str[left] !== str[right]) {
      str = str.slice(0, left).concat(str[right]).concat(str.slice(left));
      right++;
    }

    right--;
    left++;
  }

  return str;
};

export default shortestPalindrome;
