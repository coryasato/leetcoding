// 219. Contains Duplicate II - https://leetcode.com/problems/contains-duplicate-ii/

// Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.

// Example 1:
// Input: nums = [1,2,3,1], k = 3
// Output: true

// Example 2:
// Input: nums = [1,0,1,1], k = 1
// Output: true

// Example 3:
// Input: nums = [1,2,3,1,2,3], k = 2
// Output: false

const containsNearbyDuplicate = (nums, k) => {
  const map = {};
  let res = false;

  nums.forEach((num, i) => {
    if (num in map) {
      // For each index of a given number run the predicate against the current index.
      // Since a number can arise more than twice, we need to check every prior index.
      map[num].forEach(idx => {
        if (Math.abs(idx - i) <= k) {
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

export default containsNearbyDuplicate;
