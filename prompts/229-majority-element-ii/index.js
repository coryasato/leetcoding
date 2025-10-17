// 229. Majority Element II - https://leetcode.com/problems/majority-element-ii/

// Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times.

// Example 1:
// Input: nums = [3,2,3]
// Output: [3]

// Example 2:
// Input: nums = [1]
// Output: [1]

// Example 3:
// Input: nums = [1,2]
// Output: [1,2]

const majorityElement = (nums) => {
  const floor = Math.floor(nums.length / 3);
  const map = {};
  const res = new Set();

  nums.forEach(num => {
    map[num] = (map[num] || 0) + 1;

    if (map[num] > floor) {
      res.add(num);
    }
  });

  return [...res];
};

export default majorityElement;
