// 40. Combination Sum II - https://leetcode.com/problems/combination-sum-ii
//
// Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sum to target.
//
// Each number in candidates may only be used once in the combination.
//
// Note: The solution set must not contain duplicate combinations.
//
// Example 1:
// Input: candidates = [10,1,2,7,6,1,5], target = 8
// Output:
// [
// [1,1,6],
// [1,2,5],
// [1,7],
// [2,6]
// ]
//
// Example 2:
// Input: candidates = [2,5,2,1,2], target = 5
// Output:
// [
// [1,2,2],
// [5]
// ]

const combinationSum2 = (candidates, target) => {
  const res = {};

  const combine = (index, arr) => {
    if (index === candidates.length) {
      if (arr.length > 0) {
        const sum = arr.reduce((acc, n) => acc + n, 0);

        if (sum === target) {
          const key = arr.sort((a, b) => a - b).join('-');
          res[key] = arr;
        }
      }
      return;
    }

    combine(index + 1, arr);
    combine(index + 1, [...arr, candidates[index]]);
  };

  combine(0, []);
  return Object.values(res);
};

export default combinationSum2;
