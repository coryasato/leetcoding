// 90. Subsets II - https://leetcode.com/problems/subsets-ii/

// Given an integer array nums that may contain duplicates, return all possible subsets (the power set).

// The solution set must not contain duplicate subsets. Return the solution in any order.

// Example 1:
// Input: nums = [1,2,2]
// Output: [[],[1],[1,2],[1,2,2],[2],[2,2]]

// Example 2:
// Input: nums = [0]
// Output: [[],[0]]

const subsetsWithDupsR = (nums) => {
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

const subsetsWithDups = (nums) => {
  let map = {};
  let result = [[]];
  let cursor = 0;

  while(cursor < nums.length) {
    let curr = [];
    for (let i = cursor; i < nums.length; i++) {
      curr.push(nums[i]);

      const key = curr.join('-');
      if (!(key in map)) {
        map[key] = true;
        result.push([...curr]);
      }
    }
    cursor++;
  }

  return result;
};

export default subsetsWithDups;
