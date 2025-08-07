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
// UPDATE: Cleaned up the Grok code to use less data structures, but kept the solution the same.
const maximumGap = (nums) => {
  if (nums.length < 2) return 0;

  // Find the min and max values in nums. This will be our numerical range which determines our bucketSize below.
  let min = Number.MAX_VALUE;
  let max = Number.MIN_VALUE;
  nums.forEach(num => {
    min = Math.min(min, num);
    max = Math.max(max, num);
  });

  const bucketSize = Math.ceil((max - min) / (nums.length-1));  // The average gap between all items, numerically.
  const bucketRanges = Array(nums.length).fill([Number.MAX_VALUE, Number.MIN_VALUE]);
  // Fill in the ranges per index. Each index will have a [min, max] which gives us the max gap of adjacent items.
  // When the particular indexes are not updated and remain the default MAX/MIN values, then there is a "pocket" there,
  // which we ignore when calculating the gap between the ranges. The pockets are the large gaps between items.
  nums.forEach(num => {
    const index = num === min
      ? 0
      : num === max
      ? nums.length-1
      : Math.floor((num - min) / bucketSize);

    bucketRanges[index] = [
      Math.min(bucketRanges[index][0], num),
      Math.max(bucketRanges[index][1], num),
    ];
  });

  // Find the maxGap from ranges: (currentIndex['min'] - previousIndex['max']) === gap;
  // We could do a look-behind via bucketRanges[i-1][1],
  // but we store the previousMax range in a variable instead and initialize it with the minimum value of nums.
  let maxGap = 0;
  let prevMax = min;
  bucketRanges.forEach(range => {
    if (range[0] !== Number.MAX_VALUE) {
      maxGap = Math.max(maxGap, (range[0] - prevMax));
      prevMax = range[1];
    }
  });

  return maxGap;
};

export default maximumGap;
