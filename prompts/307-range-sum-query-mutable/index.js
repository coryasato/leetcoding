// 307. Range Sum Query - Mutable - https://leetcode.com/problems/range-sum-query-mutable/

// Given an integer array nums, handle multiple queries of the following types:

// Update the value of an element in nums.
// Calculate the sum of the elements of nums between indices left and right inclusive where left <= right.
// Implement the NumArray class:

// NumArray(int[] nums) Initializes the object with the integer array nums.
// void update(int index, int val) Updates the value of nums[index] to be val.
// int sumRange(int left, int right) Returns the sum of the elements of nums between indices left and right inclusive (i.e. nums[left] + nums[left + 1] + ... + nums[right]).

// Example 1:

// Input
// ["NumArray", "sumRange", "update", "sumRange"]
// [[[1, 3, 5]], [0, 2], [1, 2], [0, 2]]

// Output
// [null, 9, null, 8]

// Explanation
// NumArray numArray = new NumArray([1, 3, 5]);
// numArray.sumRange(0, 2); // return 1 + 3 + 5 = 9
// numArray.update(1, 2);   // nums = [1, 2, 5]
// numArray.sumRange(0, 2); // return 1 + 2 + 5 = 8

class NumArray {
  constructor(nums) {
    this.nums = nums;
  }

  // NOTE: If in prod, I'd just do this if not concerned with memory:
  // > return this.nums.slice(left, right+1).reduce((acc, n) => acc + n, 0);
  // Since this is leetcode, lets aim for performance.
  sumRange(left, right) {
    if (left === right) return this.nums[left];

    let sum = 0;

    for (let i = left; i <= right; i++) {
      sum += this.nums[i];
    }

    return sum;
  }

  update(idx, val) {
    this.nums[idx] = val;
    return null;
  }
};

export default NumArray;
