// 189. Rotate Array - https://leetcode.com/problems/rotate-array/

// Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

// Example 1:
// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]

// Example 2:
// Input: nums = [-1,-100,3,99], k = 2
// Output: [3,99,-1,-100]
// Explanation:
// rotate 1 steps to the right: [99,-1,-100,3]
// rotate 2 steps to the right: [3,99,-1,-100]

// Quick solution.
const _rotate = (nums, k) => {
  while (k > 0) {
    nums = nums.slice(-1).concat(nums.slice(0, -1));
    k--;
  }
  return nums;
};

// O(1) extra space solution.
// This is kinda similar to reversing an array in place, but here we need to swap multiple times per round,
// determining on the k argument.
const rotate = (nums, k) => {
  // Modulus k so we don't have to do continuous round trips when k is greater than nums.length.
  const interval = k % nums.length;
  // If interval is zero, then k is a divisor of nums.length, meaning a full rotation.
  if (interval === 0) return nums;

  let counter = interval;
  let left = ((nums.length-1) - interval);
  let right = nums.length-1;

  while (counter > 0) {
    let temp = nums[left];
    nums[left] = nums[right];
    nums[right] = temp;

    // The inner loop is going to swap the current right element to the beginning of the array.
    // This will also swap the (left - interval) indices forward.
    let tempLeft = Math.max((left - interval), 0);
    let tempRight = left;

    while (tempRight > 0) {
      temp = nums[tempLeft];  // Mutating the temp var, do not use past this line
      nums[tempLeft] = nums[tempRight];
      nums[tempRight] = temp;

      // Move tempLeft back N-indices and memo the current left as the new right pointer.
      tempRight = tempLeft;
      tempLeft = Math.max((tempLeft - interval), 0);
    }

    left = ((left-1) < 1) ? ((nums.length-1) - interval) : left-1;
    right = ((right-1) < 1) ? nums.length-1 : right-1;
    counter--;
  }

  return nums;
};

export default rotate;
