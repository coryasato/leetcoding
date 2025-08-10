// 167. Two Sum II - Input Array Is Sorted - https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/

// Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.

// Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.

// The tests are generated such that there is exactly one solution. You may not use the same element twice.

// Your solution must use only constant extra space.

// Example 1:
// Input: numbers = [2,7,11,15], target = 9
// Output: [1,2]
// Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].

// Example 2:
// Input: numbers = [2,3,4], target = 6
// Output: [1,3]
// Explanation: The sum of 2 and 4 is 6. Therefore index1 = 1, index2 = 3. We return [1, 3].

// Example 3:
// Input: numbers = [-1,0], target = -1
// Output: [1,2]
// Explanation: The sum of -1 and 0 is -1. Therefore index1 = 1, index2 = 2. We return [1, 2].

// Note: Theres no time contraint on the prompt, but the O(n^2) nested loop is always a concern.
// We could do a O(n log n) with left and right pointers and move them through starting at the first and last elements
// then move them based on the sum of the elements (over the target or less than the target). This will only work if the nums
// arg is pre-sorted, which it is for this current prompt.
const twoSum = (nums, target) => {
  let res = null;

  for (let i = 0; i < nums.length; i++) {
    const remaining = target - nums[i];

    for (let j = i+1; j < nums.length; j++) {
      if (nums[j] === remaining) {
        res = [i+1, j+1];
        break;
      }
    }

    if (res !== null) break;
  }

  return res;
};

export default twoSum;
