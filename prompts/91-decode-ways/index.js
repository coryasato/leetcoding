// 91. Decode Ways - https://leetcode.com/problems/decode-ways/

// You have intercepted a secret message encoded as a string of numbers. The message is decoded via the following mapping:
// "1" -> 'A'
// "2" -> 'B'
// ...
// "25" -> 'Y'
// "26" -> 'Z'

// However, while decoding the message, you realize that there are many different ways you can decode the message because some codes are contained in other codes ("2" and "5" vs "25").

// For example, "11106" can be decoded into:

// "AAJF" with the grouping (1, 1, 10, 6)
// "KJF" with the grouping (11, 10, 6)
// The grouping (1, 11, 06) is invalid because "06" is not a valid code (only "6" is valid).

// Note: there may be strings that are impossible to decode.
// Given a string s containing only digits, return the number of ways to decode it. If the entire string cannot be decoded in any valid way, return 0.
// The test cases are generated so that the answer fits in a 32-bit integer.

// Example 1:
// Input: s = "12"
// Output: 2
// Explanation:
// "12" could be decoded as "AB" (1 2) or "L" (12).

// Example 2:
// Input: s = "226"
// Output: 3
// Explanation:
// "226" could be decoded as "BZ" (2 26), "VF" (22 6), or "BBF" (2 2 6).

// Example 3:
// Input: s = "06"
// Output: 0
// Explanation:
// "06" cannot be mapped to "F" because of the leading zero ("6" is different from "06"). In this case, the string is not a valid encoding, so return 0.

const numDecodings = (s) => {
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    const curr = s[i];
    const next = s[i+1] || '';

    if (curr === '0') {
      const prev = s[i-1];

      if (i === 0 || (prev !== '1' && prev !== '2')) {
        break;                                         // End the loop, the string is illegal
      } else {                                         // Handles '10' and '20'
        if (i % 2 === 0) {                             // If the index is even then we need to remove a counter
          count--;
        }
        continue;
      }
    }

    const num = parseInt((curr + next));
    if (num > 10 && num <= 26 && num !== 20) {
      // console.log({count, i, num, math: Math.abs(i-2)});
      count += Math.abs(i - 2);
    }
  }

  return count;
};

// console.log(numDecodings('12'));
// console.log(numDecodings('06'));
// console.log(numDecodings('2221012'));
console.log(numDecodings('2261212'));

export default numDecodings;
