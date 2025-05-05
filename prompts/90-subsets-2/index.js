// 90. Subsets II - https://leetcode.com/problems/subsets-ii/

// Given an integer array nums that may contain duplicates, return all possible subsets (the power set).

// The solution set must not contain duplicate subsets. Return the solution in any order.

// Example 1:
// Input: nums = [1,2,2]
// Output: [[],[1],[1,2],[1,2,2],[2],[2,2]]

// Example 2:
// Input: nums = [0]
// Output: [[],[0]]

const subsetsWithDups = (nums) => {
  const map = {};
  const recurse = (idx, arr) => {
    if (idx === nums.length) {
      const key = arr.join('-');
      // Only return items that we haven't seen before.
      if (!(key in map)) {
        map[key] = true;
        return [arr.slice()];
      } else {
        return [];
      }
    }

    return [
      ...recurse(idx + 1, arr),
      ...recurse(idx + 1, [...arr, nums[idx]]),
    ];
  };

  return recurse(0, []);
};

// console.log(subsetsWithDups([1,2,2]));
// console.log(subsetsWithDups([0]));

export default subsetsWithDups;
