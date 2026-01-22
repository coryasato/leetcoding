// 279. Perfect Squares - https://leetcode.com/problems/perfect-squares/

// Given an integer n, return the least number of perfect square numbers that sum to n.

// A perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself. For example, 1, 4, 9, and 16 are perfect squares while 3 and 11 are not.

// Example 1:
// Input: n = 12
// Output: 3
// Explanation: 12 = 4 + 4 + 4.

// Example 2:
// Input: n = 13
// Output: 2
// Explanation: 13 = 4 + 9.

// Constraints:
// 1 <= n <= 10^4
import combinationSum from "../39-combination-sum";

const SQUARES = Array.from({ length: 100 }, (_, i) => (i + 1) ** 2);

// NOTE: Realized, this is just combinationSum half way through and we've already solved this.
const numSquares = (n) => {
  const squares = SQUARES.slice(0, SQUARES.findIndex(s => s > n));

  return combinationSum(squares, n)
    .reduce((acc, list) => (acc.length > 0 && acc.length < list.length) ? acc : list, [])
    .length;
};

export default numSquares;
