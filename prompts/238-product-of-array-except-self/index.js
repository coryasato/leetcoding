// 238. Product of Array Except Self - https://leetcode.com/problems/product-of-array-except-self/

// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.

// Example 1:
// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]

// Example 2:
// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]

// Follow up: Can you solve the problem in O(1) extra space complexity? (The output array does not count as extra space for space complexity analysis.)

const productExceptSelf = (nums) => {
  const res = new Array(nums.length);

  res[0] = 1;
  for (let i = 1; i < nums.length; i++) {
    res[i] = res[i-1] * nums[i-1];
  }

  let product = 1;
  for (let i = nums.length-1; i >= 0; i--) {
    res[i] = ((res[i] * product) || 0);  // NOTE: The (n || 0) op is to convert -0 to 0
    product = product * nums[i];
  }

  return res;
};

export default productExceptSelf;
