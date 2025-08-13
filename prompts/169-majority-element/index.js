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

// NOTE: Update to the note around O(1). I missed the prompt specifying the majority element will be repeated
// more than half the length of nums. This makes it trivial since we can basically assume the higher frequency of the majority
// element will overtake other numbers in one iteration utilizing a counter.
const _majorityElement = (nums) => {
  let el = nums[0];
  let count = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === el) {
      count++;
    } else {
      count --;
    }
    // Reset the counter.
    if (count === 0) {
      el = nums[i];
      count = 1;
    }
  }

  return el;
};

// NOTE: Uses O(N) space due to the map object that growns with the input.
// O(1) space attempt: Tried usind bit-shifts that mark indexes and numbers utilizing the modelo op. But it if the integers aren't within a range less than
// the length of the argument, the index collions with not math properly. Left this note in case another solution is thought up for O(1) space.
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
