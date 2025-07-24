// 151. Reverse Words in a String - https://leetcode.com/problems/reverse-words-in-a-string/

// Given an input string s, reverse the order of the words.

// A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.

// Return a string of the words in reverse order concatenated by a single space.

// Note that s may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.

// Example 1:
// Input: s = "the sky is blue"
// Output: "blue is sky the"

// Example 2:
// Input: s = "  hello world  "
// Output: "world hello"
// Explanation: Your reversed string should not contain leading or trailing spaces.

// Example 3:
// Input: s = "a good   example"
// Output: "example good a"
// Explanation: You need to reduce multiple spaces between two words to a single space in the reversed string.

const reverseWords = (str) => {
  // Note: In the real world, this one liner would suffice.
  // return str.trim().split(' ').filter(s => s.length > 0).reverse().join(' ');
  let res = '';
  let currWord = '';

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (char === ' ' && currWord.length > 0) {
      res = res.length > 0 ? `${currWord} ${res}` : currWord;
      currWord = '';
    } else if (char !== ' ') {
      currWord += char;
    }
  }

  return currWord.length > 0 ? `${currWord} ${res}` : res;
};

export default reverseWords;
