// 315. Count of Smaller Numbers After Self - https://leetcode.com/problems/count-of-smaller-numbers-after-self/

// Given an integer array nums, return an integer array counts where counts[i] is the number of smaller elements to the right of nums[i].

// Example 1:
// Input: nums = [5,2,6,1]
// Output: [2,1,1,0]
// Explanation:
// To the right of 5 there are 2 smaller elements (2 and 1).
// To the right of 2 there is only 1 smaller element (1).
// To the right of 6 there is 1 smaller element (1).
// To the right of 1 there is 0 smaller element.

// Example 2:
// Input: nums = [-1]
// Output: [0]

// Example 3:
// Input: nums = [-1,-1]
// Output: [0,0]

// NOTE: Quick brute solution.
const _countSmaller = (nums) => {
  const res = Array(nums.length).fill(0);

  for (let i = 0; i < nums.length; i++) {
    for (let j = i+1; j < nums.length; j++) {
      if (nums[i] > nums[j]) {
        res[i]++;
      }
    }
  }

  return res;
};


const _findIndexForNum = (list, num) => {
  if (!list.length) return 0;
  if (list[0] > num) return 0;
  if (list[list.length-1] < num) return list.length;

  let start = 0;
  let end = list.length;

  while (start < end) {
    const mid = Math.floor((end - start) / 2) + start;

    if (list[mid] < num) {
      start = mid+1;
    } else {
      end = mid;
    }
  }

  return start;
};

// NOTE: Removed the previous solution to simplify the logic. Instead of a cache of seen keys and counts,
// use an ordered list with O(logN) index lookup. If we wanted to edge the perf a bit, we could splice
// the orderedNums array instead of recreating the object every loop. If we really wanted to, we could do
// bulk inserts into that splice if we were processing a very large input. That would look like holding a temp
// queue of nums and merge sorting on every nth event or limit by length.
const countSmaller = (nums) => {
  const res = Array(nums.length).fill(0);
  let orderedNums = [];

  for (let i = nums.length-1; i >= 0; i--) {
    const num = nums[i];
    const idxToInsert = _findIndexForNum(orderedNums, num);

    // All prev items in orderedNums is our count.
    res[i] = idxToInsert;
    // Insert the current num in its ascending order.
    orderedNums = orderedNums.slice(0, idxToInsert).concat(num).concat(orderedNums.slice(idxToInsert));
  }

  return res;
};

export default countSmaller;
