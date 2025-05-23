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
  let combos = [];  // NOTE: This is not needed, but is useful for debugging. The result should be all of these items multiplied in order.
  let running = 0;  // The running combinations in a substring
  let multi = 0;    // The multiples per running combination

  for (let i = 0; i < s.length; i++) {
    const curr = s[i];
    const next = s[i+1] || '';

    if (curr === '0') {
      const prev = s[i-1];

      if (i === 0 || (prev !== '1' && prev !== '2')) {
        multi = -1;
        break;     // End the loop, the string is illegal
      } else {
        continue;  // If '10' or '20', move to the next index
      }
    }

    const num = parseInt((curr + next));

    if (num > 10 && num <= 26 && num !== 20) {
      running = running === 0 ? 2 : (running + 1);
    } else if (running > 0) {
      // Subtract from the previous running count when we hit a 10 or 20.
      if (num === 10 || num === 20) {
        running = Math.max(running - 1, 0);
      }
      combos.push(running);
      multi = multi === 0 ? running : (multi * running);
      running = 0;
    }
  }

  // Left the line below for debugging and to see whats going on with the combos.
  // console.log({running, combos, multi});

  // If -1, then the string was invalid, otherwise there will always be atleast 1 result.
  return multi === -1 ? 0 : Math.max(multi, 1);
};

export default numDecodings;
