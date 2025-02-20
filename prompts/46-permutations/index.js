// 46. Permutations - https://leetcode.com/problems/permutations/

// Given an array nums of distinct integers, return all the possible
// permutations. You can return the answer in any order.

// Example 1:
// Input: nums = [1,2,3]
// Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

// Example 2:
// Input: nums = [0,1]
// Output: [[0,1],[1,0]]

// Example 3:
// Input: nums = [1]
// Output: [[1]]

const permute = (nums) => {
  if (nums.length === 0) return [nums];

  let res = [];

  nums.forEach((num, i) => {
    const rest = permute(nums.slice(0, i).concat(nums.slice(i+1)));
    res.push(rest.map(arr => ([num, ...arr.flat()])));
  });

  return res.flat();
};

export default permute;
