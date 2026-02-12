// 300. Longest Increasing Subsequence - https://leetcode.com/problems/longest-increasing-subsequence/

// Given an integer array nums, return the length of the longest strictly increasing subsequence.

// Example 1:
// Input: nums = [10,9,2,5,3,7,101,18]
// Output: 4
// Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.

// Example 2:
// Input: nums = [0,1,0,3,2,3]
// Output: 4

// Example 3:
// Input: nums = [7,7,7,7,7,7,7]
// Output: 1

const lengthOfLIS = (nums) => {
  let res = [Number.MAX_SAFE_INTEGER];

  for (let i = 0; i < nums.length; i+=2) {
    const left = nums[i];
    const right = nums[i+1] || Number.MAX_SAFE_INTEGER;
    const lastInRes = res[res.length-1];

    if (left < right) {
      const tuple = right === Number.MAX_SAFE_INTEGER ? [left] : [left, right];

      if (lastInRes > left && !res.includes(left)) {
        res = res.slice(0, -1).concat(tuple);
      } else if (lastInRes < left) {
        res = res.concat(tuple);
      }

    } else {
      // Right is less than left, however we want the left number to take precendence for "strictly increasing" / "chaining".
      if (lastInRes < left) {
        res.push(left);
      } else if (lastInRes < right && right !== Number.MAX_SAFE_INTEGER) {
        res.push(right);
      }

    }
  }

  return res.length;
};

export default lengthOfLIS;
