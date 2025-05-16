// 97. Interleaving String - https://leetcode.com/problems/interleaving-string/

// Given strings s1, s2, and s3, find whether s3 is formed by an interleaving of s1 and s2.

// An interleaving of two strings s and t is a configuration where s and t are divided into n and m substrings respectively, such that:

// s = s1 + s2 + ... + sn
// t = t1 + t2 + ... + tm
// |n - m| <= 1
// The interleaving is s1 + t1 + s2 + t2 + s3 + t3 + ... or t1 + s1 + t2 + s2 + t3 + s3 + ...
// Note: a + b is the concatenation of strings a and b.

// Example 1:

// Input: s1 = "aabcc", s2 = "dbbca", s3 = "aadbbcbcac"
// Output: true
// Explanation: One way to obtain s3 is:
// Split s1 into s1 = "aa" + "bc" + "c", and s2 into s2 = "dbbc" + "a".
// Interleaving the two splits, we get "aa" + "dbbc" + "bc" + "a" + "c" = "aadbbcbcac".
// Since s3 can be obtained by interleaving s1 and s2, we return true.

// Example 2:
// Input: s1 = "aabcc", s2 = "dbbca", s3 = "aadbbbaccc"
// Output: false
// Explanation: Notice how it is impossible to interleave s2 with any other string to obtain s3.

// Example 3:
// Input: s1 = "", s2 = "", s3 = ""
// Output: true

const isInterleave = (s1, s2, s3) => {
  let s1Q = s1.slice();
  let s2Q = s2.slice();
  let start = 0;

  while (s1Q.length > 0 || s2Q.length > 0) {
    let argToProcess = null;
    let charsToSlice = 0;

    // Greedy search for the most character matches in s1 to s3.
    if (s1Q[0] === s3.slice(start, start+1)) {
      let idx = 1;

      while (idx <= s1Q.length) {
        if (s1Q.slice(0, idx) === s3.slice(start, start + idx)) {
          idx++;
        } else {
          break;
        }
      }

      argToProcess = 's1';
      charsToSlice = Math.max(idx-1, 1);
    }

    // Greedy search for the most character matches in s2 to s3.
    // If s2 has more matches than s1, then mutate argToProcess to s2.
    if (s2Q[0] === s3.slice(start, start+1)) {
      let idx = 1;

      while (idx <= s2Q.length) {
        if (s2Q.slice(0, idx) === s3.slice(start, start + idx)) {
          idx++;
        } else {
          break;
        }
      }

      if (idx > charsToSlice) {
        argToProcess = 's2';
        charsToSlice = Math.max(idx-1, 1);
      }
    }

    // If we cannot match any chars, then break the loop immediately.
    if (argToProcess === null) {
      break;
    }

    // Mutate the specific queue that has the most matching chars and update the "start" index.
    if (argToProcess === 's1') {
      s1Q = s1Q.slice(charsToSlice);
      start += charsToSlice;
    } else {
      s2Q = s2Q.slice(charsToSlice);
      start += charsToSlice;
    }
  }

  return s1Q.length === 0 && s2Q.length === 0;
};

export default isInterleave;
