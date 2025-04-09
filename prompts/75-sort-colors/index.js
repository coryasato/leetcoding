// 75. Sort Colors - https://leetcode.com/problems/sort-colors/

// Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

// We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

// You must solve this problem without using the library's sort function.

// Example 1:
// Input: nums = [2,0,2,1,1,0]
// Output: [0,0,1,1,2,2]

// Example 2:
// Input: nums = [2,0,1]
// Output: [0,1,2]

// NOTE:
// The nums arg must be directly mutated, make sure the tests reflect that.
// The rules say to return "void", we can return "undefined".
const sortColors = (nums) => {
  for (let i = 0; i < nums.length; i++) {
    let ii = i;
    while (ii > 0) {
      if ((nums[(ii - 1)]) > nums[ii]) {
        const temp = (nums[(ii - 1)]);
        nums[ii - 1] = nums[ii];
        nums[ii] = temp;
      }
      ii--;
    }
  }

  return;
};

export default sortColors;
