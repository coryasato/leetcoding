// 16. 3Sum Closest - https://leetcode.com/problems/3sum-closest

// Given an integer array nums of length n and an integer target, find three integers in nums such that the sum is closest to target.

// Return the sum of the three integers.

// You may assume that each input would have exactly one solution.

// Example 1:
// Input: nums = [-1,2,1,-4], target = 1
// Output: 2
// Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).

// Example 2:
// Input: nums = [0,0,0], target = 1
// Output: 0
// Explanation: The sum that is closest to the target is 0. (0 + 0 + 0 = 0).

// Utilizes a recursive function to sum all the 3 [i]th elements in a combinatory fashion.
// The result tuple is to reduce another map we'd have to do if we had saved all the sums. The shortest delta is the closest sum to target.
const threeSumClosest = (nums, target) => {
  let answer = null;
  let result = [Math.pow(10, 4), 0];  // Target constraint is 10,000. Set at max delta from 1.

  const recurse = (sum=0, idx=0, arr=[]) => {
    // Short circuit to save some computation.
    if (answer !== null) return;

    // If we are at the container max (3) or the nums array max, process the current sum of 3.
    if (idx === nums.length || arr.length === 3) {
      if (arr.length === 3) {
        if (sum === target) {
          answer = sum;
          return;
        }

        const delta = Math.abs(sum - target);
        if (delta < result[0]) {
          result = [delta, sum];
        }
      }
      return;
    }

    // Recurse forward into the array, including the current value into the arr variable.
    recurse(sum + nums[idx], idx+1, arr.concat(nums[idx]));
    // Backtrack, excluding the current value and incrementing the idx loop.
    recurse(sum, idx+1, arr);
  };

  recurse();
  return answer !== null ? answer : result[1];
};

export default threeSumClosest;


