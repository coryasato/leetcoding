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
const _numSquares = (n) => {
  const squares = SQUARES.slice(0, SQUARES.findIndex(s => s > n));

  return combinationSum(squares, n)
    .reduce((acc, list) => (acc.length > 0 && acc.length < list.length) ? acc : list, [])
    .length;
};

const _sumSquares = (squares, target) => {
  // If the sole square int is divisible by the target, return a filled out array.
  if (squares.length === 1 && (target % squares[0] === 0)) {
    return new Array(target / squares[0]).fill(squares[0]);
  }

  let sum = squares.reduce((acc, n) => acc + n, 0);
  if (sum > target) return [];
  if (sum === target) return squares;

  let remaining = target - sum;

  if (squares.includes(remaining)) {
    return squares.concat(remaining).sort((a, b) => a - b);
  }

  return [];
};

const numSquares = (n) => {
  const squares = SQUARES.slice(0, SQUARES.findIndex(s => s > n));

  let res = [[]];

  const helper = (idx, bucket=[]) => {
    if (idx === squares.length) {
      if (bucket.length > 0) {
        const entry = _sumSquares(bucket, n);

        if (entry.length > 0) {
          if (res[0].length === 0) {
            res[0] = entry;
          } else if (entry.length < res[0]) {
            res[0] = entry;
          }
        }
      }
      return;
    }

    helper(idx + 1, bucket);
    helper(idx + 1, [...bucket, squares[idx]]);
  };

  helper(0);
  return res[0].length;
};

export default numSquares;
