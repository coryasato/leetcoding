// 35. Search Insert Position - https://leetcode.com/problems/search-insert-position

// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

// Example 1:
// Input: nums = [1,3,5,6], target = 5
// Output: 2

// Example 2:
// Input: nums = [1,3,5,6], target = 2
// Output: 1

// Example 3:
// Input: nums = [1,3,5,6], target = 7
// Output: 4

const searchInsert = (nums, target) => {
  let index = -1;
  let left = 0;
  let right = nums.length-1;

  while (left <= right) {
    const mid = Math.floor(left + (right - left) / 2);

    if (nums[mid] === target) {
      index = mid;
      break;
    } else if ((nums[mid] - 1) === target || (nums[mid] + 1) === target) {
      index = (nums[mid] - 1) === target ? mid : (mid + 1);
      break;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return index;
};

export default searchInsert;
