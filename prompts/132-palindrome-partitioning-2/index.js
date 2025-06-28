// 132. Palindrome Partitioning II - https://leetcode.com/problems/palindrome-partitioning-ii/

// Given a string s, partition s such that every substring of the partition is a palindrome.

// Return the minimum cuts needed for a palindrome partitioning of s.

// Example 1:
// Input: s = "aab"
// Output: 1
// Explanation: The palindrome partitioning ["aa","b"] could be produced using 1 cut.

// Example 2:
// Input: s = "a"
// Output: 0

// Example 3:
// Input: s = "ab"
// Output: 1

// NOTE: The solution from the previous prompt will work here.
import partition from "../131-palindrome-partitioning";

const minCut = (s) => {
  if (s.length <= 1) return 0;

  return partition(s).reduce((acc, part) => Math.min(acc, part.length-1), Number.MAX_VALUE);
};

export default minCut;
