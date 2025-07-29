// 153. Find Minimum in Rotated Sorted Array - https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/

// Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0,1,2,4,5,6,7] might become:

// [4,5,6,7,0,1,2] if it was rotated 4 times.
// [0,1,2,4,5,6,7] if it was rotated 7 times.
// Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].

// Given the sorted rotated array nums of unique elements, return the minimum element of this array.

// You must write an algorithm that runs in O(log n) time.

// Example 1:
// Input: nums = [3,4,5,1,2]
// Output: 1
// Explanation: The original array was [1,2,3,4,5] rotated 3 times.

// Example 2:
// Input: nums = [4,5,6,7,0,1,2]
// Output: 0
// Explanation: The original array was [0,1,2,4,5,6,7] and it was rotated 4 times.

// Example 3:
// Input: nums = [11,13,15,17]
// Output: 11
// Explanation: The original array was [11,13,15,17] and it was rotated 4 times.

const findMin = (nums) => {
  let numsClone = nums.slice();
  let res = Number.MIN_VALUE;

  while (numsClone.length > 1) {
    const mid = Math.floor(numsClone.length / 2);
    const left = numsClone.slice(0, mid);
    const right = numsClone.slice(mid);

    if (left.length === 1 && right.length === 1) {
      res = Math.min(left, right);
      break;
    }

    if (right[right.length-1] < right[0] || right[0] < left[left.length-1]) {
      // Rotated right.
      numsClone = right;
    } else if (left[0] < left[left.length-1] || left[left.length-1] < right[0]) {
      // Rotated left.
      numsClone = left;
    }
  }

  return res;
};

export default findMin;
