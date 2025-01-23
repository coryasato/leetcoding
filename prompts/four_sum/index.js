// 18. 4Sum - https://leetcode.com/problems/4sum/
// Given an array nums of n integers, return an array of all the unique quadruplets [nums[a], nums[b], nums[c], nums[d]] such that:

// 0 <= a, b, c, d < n
// a, b, c, and d are distinct.
// nums[a] + nums[b] + nums[c] + nums[d] == target
// You may return the answer in any order.

// Example 1:
// Input: nums = [1,0,-1,0,-2,2], target = 0
// Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]

// Example 2:
// Input: nums = [2,2,2,2,2], target = 8
// Output: [[2,2,2,2]]

// Recursive "backtracking" strategy.
// This is slower than using pointers (which you can find in three_sum_closest), but less code overall.
// Trying to think more functionally atm.
const fourSum = (nums, target) => {
  const map = {};

  const recurse = (sum=0, idx=0, arr=[]) => {
    if (idx === nums.length || arr.length === 4) {
      if (arr.length === 4 && sum === target) {
        const key = arr.join('_');
        if (!(key in map)) {
            map[key] = arr;
        }
      }
      return;
    }
    // Include current value to send forward into the next loop with the current sum.
    recurse(sum + nums[idx], idx+1, arr.concat(nums[idx]));
    // Exclude current value to backtrack and move forward an index.
    recurse(sum, idx+1, arr);
  };

  recurse();
  return Object.values(map);
};

export default fourSum;
