// 34. Find First and Last Position of Element in Sorted Array - https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array

// Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

// If target is not found in the array, return [-1, -1].

// You must write an algorithm with O(log n) runtime complexity.

// Example 1:
// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]

// Example 2:
// Input: nums = [5,7,7,8,8,10], target = 6
// Output: [-1,-1]

// Example 3:
// Input: nums = [], target = 0
// Output: [-1,-1]

const searchRange = (nums, target) => {
  const range = [-1,-1];

  if (nums.length === 0) return range;

  let left = 0;
  let right = nums.length-1;

  while (left <= right) {
    let mid = Math.floor(left + (right - left) / 2);

    if (nums[mid] === target) {
      // When we find the target, look to the index to the left or right to sort the index values accordingly.
      // This code assumes there will always be a starting and ending position for the target (if the target exists in the array).
      return nums[mid-1] === target ? [mid-1, mid] : [mid, mid+1];

    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return range;
};

export default searchRange;