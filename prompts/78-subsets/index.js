// 78. Subsets - https://leetcode.com/problems/subsets/

// Given an integer array nums of unique elements, return all possible subsets (the power set).

// The solution set must not contain duplicate subsets. Return the solution in any order.

// Example 1:
// Input: nums = [1,2,3]
// Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]

// Example 2:
// Input: nums = [0]
// Output: [[],[0]]

const subsets = (nums) => {
  let res = [[]];

  for (let i = 0; i < nums.length; i++) {
    let entry = [nums[i]];
    res.push(entry);

    let left = i + 1;
    let right = left + 1;

    while (left < nums.length) {
      const next = nums.slice(left, right);
      res.push(entry.concat(next));

      if (right >= nums.length) {
        left++;
        right = left + 1;
      } else {
        right++;
      }
    }
  }

  return res;
};

export default subsets;
