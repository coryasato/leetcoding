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

// O(N) time | O(N) space
const _majorityElement = (nums) => {
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

// Follow up: Could you solve the problem in linear time and in O(1) space?
// Boyer-Moore Voting Algorithm: https://en.wikipedia.org/wiki/Boyer%E2%80%93Moore_majority_vote_algorithm
// O(N) time | O(1) space
const majorityElement = (nums) => {
  let numA = null;
  let numB = null;
  let countA = 0;
  let countB = 0;

  // Find the most repeating entries in the array. This will give us our best 2 (at most) candidates.
  nums.forEach(num => {
    if (num === numA) {
      countA++;
    } else if (num === numB) {
      countB++;
    } else if (countA === 0) {
      numA = num;
      countA = 1;
    } else if (countB === 0) {
      numB = num;
      countB = 1;
    } else {
      countA = Math.max(0, countA-1);
      countB = Math.max(0, countB-1);
    }
  });

  // Tally the actual count for our candidates.
  countA = 0;
  countB = 0;
  nums.forEach(num => {
    if (num === numA) {
      countA++;
    } else if (num === numB) {
      countB++;
    }
  });

  const res = [];
  const threshold = Math.floor(nums.length / 3);  // ⌊ n/3 ⌋ (the "⌊ ⌋" chars means floor)

  if (countA > threshold) { res.push(numA); }
  if (countB > threshold) { res.push(numB); }

  return res;
};

export default majorityElement;
