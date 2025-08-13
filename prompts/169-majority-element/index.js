// 169. Majority Element - https://leetcode.com/problems/majority-element/

// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

// Example 1:
// Input: nums = [3,2,3]
// Output: 3

// Example 2:
// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

// Follow-up: Could you solve the problem in linear time and in O(1) space?

// NOTE: Uses O(N) space due to the map object that growns with the input.
// O(1) space attempt: Tried usind bit-shifts that mark indexes and numbers utilizing modelo op. But it if the integers aren't within a range less than
// the length of the argument, the index collions with not math properly. Left this note in case another solution is though up for O(1) space.
const majorityElement = (nums) => {
  const map = {};
  let maxCount = 0;
  let res = -1;

  for (const num of nums) {
    map[num] = (map[num] || 0) + 1;

    if (maxCount < map[num]) {
      maxCount = map[num];
      res = num;
    }
  }

  return res;
};

export default majorityElement;
