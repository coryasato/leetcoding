// 300. Longest Increasing Subsequence - https://leetcode.com/problems/longest-increasing-subsequence/

// Given an integer array nums, return the length of the longest strictly increasing subsequence.

// Example 1:
// Input: nums = [10,9,2,5,3,7,101,18]
// Output: 4
// Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.

// Example 2:
// Input: nums = [0,1,0,3,2,3]
// Output: 4

// Example 3:
// Input: nums = [7,7,7,7,7,7,7]
// Output: 1

const _lengthOfLIS = (nums) => {
  let res = [Number.MAX_SAFE_INTEGER];

  for (let i = 0; i < nums.length; i+=2) {
    const left = nums[i];
    const right = nums[i+1] || Number.MAX_SAFE_INTEGER;
    const lastInRes = res[res.length-1];

    if (left < right) {
      const tuple = right === Number.MAX_SAFE_INTEGER ? [left] : [left, right];

      if (lastInRes > left && !res.includes(left)) {
        res = res.slice(0, -1).concat(tuple);
      } else if (lastInRes < left) {
        res = res.concat(tuple);
      }

    } else {
      // Right is less than left, however we want the left number to take precendence for "strictly increasing" / "chaining".
      if (lastInRes < left) {
        res.push(left);
      } else if (lastInRes < right && right !== Number.MAX_SAFE_INTEGER) {
        res.push(right);
      }

    }
  }

  return res.length;
};

// Follow up: Can you come up with an algorithm that runs in O(n log(n)) time complexity?

// Divide and conquer approach.
// Where this fails is around the conditional where we choose a chained left over a lower number right. If the theres
// more items in the array past this branch, then the chained conditional may be wrong since there could be a greater
// subsequence past it. We would have to open up different branches and then assess which branch has the most nums in it.
// That wouldn't work for the time constraint.
const lengthOfLIS = (nums) => {
  let res = [Number.MAX_SAFE_INTEGER];
  const set = new Set();

  const recurse = (arr) => {
    if (arr.length <= 1) {
      return arr;
    }

    const mid = Math.floor(arr.length / 2);
    const left = recurse(arr.slice(0, mid));

    if (left.length === 1) {
      if (left[0] < res[res.length-1]) {
        set.delete(res[res.length-1]);
        set.add(left[0]);
        res = res.slice(0, -1).concat(left);
      } else if (!set.has(left[0])) {
        res.push(left[0]);
        set.add(left[0]);
      }
    }

    const right = recurse(arr.slice(mid));

    if (right.length === 1) {
      if (right[0] < res[res.length-1]) {
        // If the last item inserted was the same stack's left, then we want to honor the left item
        // for the "strictly increasing" logic. The chaining matters more the lesser number.
        if (res[res.length-1] !== left[0]) {
          set.delete(res[res.length-1]);
          set.add(right[0]);
          res = res.slice(0, -1).concat(right);
        }
      } else if (!set.has(right[0])) {
        res.push(right[0]);
        set.add(right[0]);
      }
    }

    return arr;
  };

  recurse(nums);
  return res.length;
};

export default lengthOfLIS;
