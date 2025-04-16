// 78. Subsets - https://leetcode.com/problems/subsets/

// Given an integer array nums of unique elements, return all possible subsets (the power set).

// The solution set must not contain duplicate subsets. Return the solution in any order.

// Example 1:
// Input: nums = [1,2,3]
// Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]

// Example 2:
// Input: nums = [0]
// Output: [[],[0]]

// This fn is Grok code. Studying efficient ways for large inputs.
function subsetsBitMask(nums) {
  const n = nums.length;
  const result = [];

  // Iterate from 0 to 2^n - 1
  // If: (n === 3); then: (1 << n) === 8; ((3*3)-1); There will be 8 entries total.
  for (let mask = 0; mask < (1 << n); mask++) {
    const subset = [];
    // Check each bit
    for (let i = 0; i < n; i++) {
      if (mask & (1 << i)) {  // If i-th bit is set, include nums[i]
        subset.push(nums[i]);
      }
    }

    result.push(subset);
  }

  return result;
}

// Recursive case with "exclude" / "include", backtracking.
const subsetsR = (nums) => {
  const recurse = (idx, arr) => {
    if (idx === nums.length) {
      return [arr.slice()];
    }

    return [
      ...recurse(idx + 1, arr),
      ...recurse(idx + 1, [...arr, nums[idx]])
    ];
  };

  return recurse(0, []);
};

// Iterative, using cursors.
// Time & Space: O(2^n)
const subsets = (nums) => {
  let res = [[]];

  for (let i = 0; i < nums.length; i++) {
    let entry = [nums[i]];
    res.push(entry);

    let left = i + 1;
    let right = left + 1;

    while (left < nums.length) {
      const next = nums.slice(left, right);
      res.push(entry.concat(next));

      if (right >= nums.length) {
        left++;
        right = left + 1;
      } else {
        right++;
      }
    }
  }

  return res;
};

export default subsets;
