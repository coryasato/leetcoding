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

// Strategy using 3 pointers.
//
// jsbench                   - 147M ops/s ± 4.5% Fastest
// https://www.bigocalc.com/ - Time: O(n^2) | Space: O(1)
export const threeSumClosestLinear = (nums, target) => {
  const endIdx = nums.length-1;

  let left = 0;
  let mid = 1;
  let right = 2;

  let loop = true;
  let result = [Math.pow(10, 4), 0];

  while(loop) {
    if (left > nums.length-3) {
      loop = false;
      break;
    }

    const sum = nums[left] + nums[mid] + nums[right];

    if (sum === target) {
      result = [0, sum];
      break;
    }

    const delta = Math.abs(target - sum);
    if (delta < result[0]) {
      result = [delta, sum];
    }

    if (right < endIdx) {
      right += 1;
    } else if (right === endIdx && mid === endIdx-1) {
      left += 1;
      mid = left + 1;
      right = mid + 1;
    } else {
      mid += 1;
      right = mid + 1;
    }
  }

  return result[1];
};

// Utilizes a recursive function to sum all the 3 [i]th elements in a combinatory fashion.
// The result tuple is to reduce another map we'd have to do if we had saved all the sums. The shortest delta is the closest sum to target.
//
// jsbench                   - 123M ops/s ± 6.79% 16.02 % slower
// https://www.bigocalc.com/ - Time: O(2^n) | Space: O(n)
//                             Overall, the function is not efficient for large input sizes due to its exponential time complexity,
//                             and it uses linear space for the recursion stack.
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
