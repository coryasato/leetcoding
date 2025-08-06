// 164. Maximum Gap - https://leetcode.com/problems/maximum-gap/

// Given an integer array nums, return the maximum difference between two successive elements in its sorted form. If the array contains less than two elements, return 0.

// You must write an algorithm that runs in linear time and uses linear extra space.

// Example 1:
// Input: nums = [3,6,9,1]
// Output: 3
// Explanation: The sorted form of the array is [1,3,6,9], either (3,6) or (6,9) has the maximum difference 3.

// Example 2:
// Input: nums = [10]
// Output: 0
// Explanation: The array contains less than 2 elements, therefore return 0.


// NOTE: This is coded from Grok "psuedocode". I couldn't figure out how to do this with the O(N) constraints.
// I was thinking radix-sort or similar, however this solution uses ranges with look behind to substract a previous
// max value per index with the current.
const maximumGap = (nums) => {
  if (nums.length < 2) return 0;

  const min = nums.reduce((acc, num) => Math.min(acc, num), Number.MAX_VALUE);
  const max = nums.reduce((acc, num) => Math.max(acc, num), Number.MIN_VALUE);

  const bucketSize = Math.ceil((max - min) / (nums.length - 1.0));
  const bucketMin = Array.from(Array(nums.length), () => Number.MAX_VALUE);
  const bucketMax = Array.from(Array(nums.length), () => Number.MIN_VALUE);

  for (const num of nums) {
    const index = num === min
      ? 0
      : num === max
      ? nums.length-1
      : Math.floor((num - min) / bucketSize);
    bucketMin[index] = Math.min(bucketMin[index], num);
    bucketMax[index] = Math.max(bucketMax[index], num);
  }

  let maxGap = 0;
  let prevMax = min;
  for (let i = 0; i < nums.length; i++) {
    if (bucketMin[i] !== Number.MAX_VALUE) {
      maxGap = Math.max(maxGap, (bucketMin[i] - prevMax));
      prevMax = bucketMax[i];
    }
  }

  return maxGap;
};

export default maximumGap;
