// 54. Find Minimum in Rotated Sorted Array II - https://leetcode.com/problems/find-minimum-in-rotated-sorted-array-ii/

// Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0,1,4,4,5,6,7] might become:

// [4,5,6,7,0,1,4] if it was rotated 4 times.
// [0,1,4,4,5,6,7] if it was rotated 7 times.
// Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].

// Given the sorted rotated array nums that may contain duplicates, return the minimum element of this array.

// You must decrease the overall operation steps as much as possible.

// Example 1:
// Input: nums = [1,3,5]
// Output: 1

// Example 2:
// Input: nums = [2,2,2,0,1]
// Output: 0

const findMin = (nums) => {
  let numsClone = nums.slice();
  let res = Number.MIN_VALUE;

  while (numsClone.length > 0) {
    const mid = Math.floor(numsClone.length / 2);
    const left = numsClone.slice(0, mid);
    const right = numsClone.slice(mid);

    if (numsClone.length === 1) {
      res = numsClone[0];
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