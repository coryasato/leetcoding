// 220. Contains Duplicate III - https://leetcode.com/problems/contains-duplicate-iii/

// You are given an integer array nums and two integers indexDiff and valueDiff.

// Find a pair of indices (i, j) such that:
// i != j,
// abs(i - j) <= indexDiff.
// abs(nums[i] - nums[j]) <= valueDiff, and
// Return true if such pair exists or false otherwise.

// Example 1:
// Input: nums = [1,2,3,1], indexDiff = 3, valueDiff = 0
// Output: true
// Explanation: We can choose (i, j) = (0, 3).
// We satisfy the three conditions:
// i != j --> 0 != 3
// abs(i - j) <= indexDiff --> abs(0 - 3) <= 3
// abs(nums[i] - nums[j]) <= valueDiff --> abs(1 - 1) <= 0

// Example 2:
// Input: nums = [1,5,9,1,5,9], indexDiff = 2, valueDiff = 3
// Output: false
// Explanation: After trying all the possible pairs (i, j), we cannot satisfy the three conditions, so we return false.

const containsNearbyAlmostDuplicate = (nums, indexDiff, valueDiff) => {
  const map = {};
  let res = false;

  nums.forEach((num, i) => {
    if (num in map) {
      // For each index of a given number run the predicates against the current index and value.
      map[num].forEach(idx => {
        if ((Math.abs(idx - i) <= indexDiff) && (Math.abs(nums[idx] - num) <= valueDiff)) {
          res = true;
        }
      });
      // Memoize the current index.
      map[num].push(i);
    } else {
      map[num] = [i];
    }
  });

  return res;
};

export default containsNearbyAlmostDuplicate;
