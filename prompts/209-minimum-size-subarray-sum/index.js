// 209. Minimum Size Subarray Sum - https://leetcode.com/problems/minimum-size-subarray-sum/

// Given an array of positive integers nums and a positive integer target, return the minimal length of a subarray whose sum is greater than or equal to target. If there is no such subarray, return 0 instead.

// Example 1:
// Input: target = 7, nums = [2,3,1,2,4,3]
// Output: 2
// Explanation: The subarray [4,3] has the minimal length under the problem constraint.

// Example 2:
// Input: target = 4, nums = [1,4,4]
// Output: 1

// Example 3:
// Input: target = 11, nums = [1,1,1,1,1,1,1,1]
// Output: 0

const minSubArrayLen = (target, nums) => {
  if (nums.length === 1) return nums[0] === target ? 1 : 0;

  let subArrayLen = Number.MAX_VALUE;
  let sum = nums[0];

  let left = 0;
  let right = 0;

  while (left < nums.length-1) {
    // Return early if any number equals the target.
    if (nums[left] === target || nums[right] === target) {
      subArrayLen = 1;
      break;
    }

    // Move the right pointer forward when we are NOT at the end of the array.
    // Otherwise, march left forward.
    if ((right+1) <= (nums.length-1)) {
      right++;
      sum += nums[right];
    } else {
      sum -= nums[left];
      left++;
    }

    // If our boundary is over the target, move the left pointer forward as many indexes as needed while substracting.
    if (sum > target) {
      while (sum > target) {
        sum -= nums[left];
        left++;
      }
    }

    // If we have a match, calculate the index range and make sure the minimum range is always assigned.
    if (sum === target) {
      subArrayLen = Math.min(subArrayLen, ((right - left)+1));
    }
  }

  return subArrayLen === Number.MAX_VALUE ? 0 : subArrayLen;
};

export default minSubArrayLen;
