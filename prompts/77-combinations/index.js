// 77. Combinations - https://leetcode.com/problems/combinations/
//
// Given two integers n and k, return all possible combinations of k numbers chosen from the range [1, n].
//
// You may return the answer in any order.
//
// Example 1:
// Input: n = 4, k = 2
// Output: [[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]
// Explanation: There are 4 choose 2 = 6 total combinations.
// Note that combinations are unordered, i.e., [1,2] and [2,1] are considered to be the same combination.
//
// Example 2:
// Input: n = 1, k = 1
// Output: [[1]]
// Explanation: There is 1 choose 1 = 1 total combination.

// Recursive, "backtracking" solution with projecting into an array.
const combineR = (n, k) => {
  let result = [];

  const backtrack = (start, curr) => {
    if (curr.length === k) {
      result.push([...curr]);
      return;
    }

    for (var i = start; i <= n; i++) {
      curr.push(i);
      backtrack(i + 1, curr);
      curr.pop();
    }
  };

  backtrack(1, []);
  return result;
};

// Recursive, "backtracking" solution in a functional style via flatMap.
const combineR2 = (n, k) => {
  const backtrack = (start, curr) => {
    if (curr.length === k) {
      return [curr.slice()];
    }

    return Array.from(new Array(n - start + 1), (_, i) => i + start)
      .flatMap(i => backtrack(i + 1, [...curr, i]));
  };

  return backtrack(1, []);
};

// Iterative solution, more effecient memory wise than recursive, but slower due to the inner loop. Safer for large inputs.
const combine = (n, k) => {
  if (n === 1) return [[n]];

  let values = Array.from(new Array(n).keys(), n => n + 1);
  let result = [];

  for (let i = 0; i < values.length; i++) {
    const value = values[i];

    let arr = values.slice(i+1);
    while (arr.length > 0) {
      const rest = arr.splice(0, k-1);
      result.push([value, ...rest]);
    }
  }

  return result;
};

export default combine;
