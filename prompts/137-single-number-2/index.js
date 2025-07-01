// 137. Single Number II - https://leetcode.com/problems/single-number-ii/

// Given an integer array nums where every element appears three times except for one, which appears exactly once. Find the single element and return it.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

// Example 1:
// Input: nums = [2,2,3,2]
// Output: 3

// Example 2:
// Input: nums = [0,1,0,1,0,1,99]
// Output: 99

const singleNumber = (nums) => {
  let seen = 0;
  let res = 0;
  let sum = 0;

  const hasSeen = num => ((seen & (1 << num)) !== 0);
  const markSeen = num => { seen = seen | (1 << num); };

  for (const num of nums) {
    if (!hasSeen(num)) {
      markSeen(num);
      res ^= num;
    } else {
      sum += num;
    }
  }
  // Divide the sum by two, since we summed every "seen" number twice in the else clause.
  return res ^ (sum / 2);
};

export default singleNumber;
