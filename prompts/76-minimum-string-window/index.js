// 76. Minimum Window Substring - https://leetcode.com/problems/minimum-window-substring/

// Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".

// The testcases will be generated such that the answer is unique.

// Example 1:
// Input: s = "ADOBECODEBANC", t = "ABC"
// Output: "BANC"
// Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.

// Example 2:
// Input: s = "a", t = "a"
// Output: "a"
// Explanation: The entire string s is the minimum window.

// Example 3:
// Input: s = "a", t = "aa"
// Output: ""
// Explanation: Both 'a's from t must be included in the window.
// Since the largest window of s only has one 'a', return empty string.

// NOTE: Arguments consist of both lowercase and uppercase letters.

// TODO:
// Looking at this code, we can refactor the "reduce" loop to all happen inline in the first for loop.
// 1) We can set a result var as an empty string, utilizing its length for the len memo.
// 2) Only process the indexes when indexes[ii] has a length of t.length (complete char match) and just slice the substring as soon as we can.
// 3) The current time complexity is O(m * n) because of the mapping fn over the entries array. The above will not fix that to get us to O(m + n).
const minWindowOne= (s, t) => {
  if (s.length < t.length) return '';
  if (s.length === t.length && s === t) return s;

  let entries = [];
  let indexes = [];

  for (let i = 0; i < s.length; i++) {
    if (t.includes(s[i])) {
      entries.push(s[i]);
      indexes.push([i]);
      entries = entries.map((entry, ii) => {
        if (!entry.includes(s[i])) {
          entry = entry.concat(s[i]);
          indexes[ii] = indexes[ii].concat(i);
        }
        return entry;
      });
    }
  }

  const results = indexes.reduce((acc, idx, i) => {
    if (idx.length === t.length) {
      const len = (idx[idx.length-1] + 1) - idx[0];
      const result = s.slice(idx[0], (idx[t.length-1] + 1));

      if (acc.substrLen === null) {
        acc = { substrLen: len, index: i, result };
      } else if (acc.len !== null && acc.substrLen > len) {
        acc = { substrLen: len, index: i, result };
      }
    }

    return acc;
  }, { substrLen: null, index: null, result: '' });

  // Below is for debugging.
  // console.log({entries, indexes, s, results});
  return results.result;
};


// Attempt 2:
// Using two pointers and a sliding window approach.
// BigOCalc: Time: O(n * m) | Space O(m)
const _removeLetter = (str, letter) => {
  const idx = str.indexOf(letter);
  return str.slice(0, idx) + str.slice(idx+1);
};

const minWindow = (s, t) => {
  if (s.length < t.length) return '';
  if (s.length === t.length && s === t) return s;

  let left = 0;
  let right = 0;
  let substring = '';
  let tClone = t;

  while (left < s.length-1) {
    if (tClone.length < t.length) {
      // IN A WINDOW
      const char = s[right];

      if (tClone.includes(char)) {
        tClone = _removeLetter(tClone, char);
      }

      if (tClone.length === 0) {
        // If we exhausted all the letters in "t", then we have a match.
        const str = s.slice(left, right+1);
        if (substring === '' || str.length < substring.length) {
          substring = str;
        }
        // Reset left and move forward.
        left++;
        right = left;
        tClone = t;
      } else if (right === s.length-1) {
        // We hit the end of the string, move left forward and reset other vars.
        left++;
        right = left;
        tClone = t;
      } else {
        // Move forward through the window.
        right++;
      }
    } else {
      // NOT IN A WINDOW
      const char = s[left];

      if (t.includes(char)) {
        tClone = _removeLetter(tClone, char);
        right = left + 1;
      } else {
        left++;
        right = left + 1;
      }
    }
  }

  return substring;
};

export default minWindow;
