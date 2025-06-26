// 131. Palindrome Partitioning - https://leetcode.com/problems/palindrome-partitioning/

// Given a string s, partition s such that every substring of the partition is a palindrome. Return all possible palindrome partitioning of s.

// Example 1:
// Input: s = "aab"
// Output: [["a","a","b"],["aa","b"]]

// Example 2:
// Input: s = "a"
// Output: [["a"]]

const _isPalindrome = (str) => {
  if (str.length === 1) return true;
  let res = true;
  let left = 0;
  let right = str.length-1;

  while (left < right) {
    if (str[left] !== str[right]) {
      res = false;
      break;
    }
    left++;
    right--;
  }

  return res;
};

const _isValid = (arr) => arr.every(str => _isPalindrome(str));

const partition = (s) => {
  const entries = [];

  const combo = (str, entry=[]) => {
    if (str.length === 0 && _isValid(entry)) {
      entries.push([...entry]);
      return;
    }

    for (let i = 0; i < str.length; i++) {
      entry.push(str.slice(0, i + 1));
      combo(str.slice(i + 1), entry);
      entry.pop();
    }
  };

  combo(s);
  return entries;
};

export default partition;
