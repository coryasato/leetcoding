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

const _isPalindrome = (str: string) => {
  let i = 0;
  let j = str.length-1;
  let res = true;

  while (i < j) {
    if (str[i] !== str[j]) {
      res = false;
      break;
    }
    i++;
    j--;
  }

  return res;
};

const longestPalindrome = (str: string) => {
  const charMap = new Map<string, number[]>();
  const candidates = new Set<[number, number]>();
  let res = '';

  for (let i = 0; i < str.length; i++) {
    const char = str[i]!;

    if (charMap.has(char)) {
      const charIdxs = charMap.get(char)!;

      if (charIdxs.length < 2) {
        candidates.add([charIdxs[0]!, i]);
      } else {
        // NOTE: When there are multiple indices, we need to check them all. We could do a quick math
        // check to see if the delta between indexes repeat to be valid, but this is good for now.
        charIdxs.forEach((idx: number) => {
          candidates.add([idx, i]);
        });
      }

      charMap.set(char, charIdxs.concat(i));
    } else {
      charMap.set(char, [i]);
    }
  }

  candidates.forEach((candidate: number[]) => {
    const substr = str.slice(candidate[0], (candidate[1]!+1));

    if (_isPalindrome(substr) && substr.length > res.length) {
      res = substr;
    }
  });

  return res;
};

export default longestPalindrome;
