// 239. Sliding Window Maximum - https://leetcode.com/problems/sliding-window-maximum/

// You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.

// Return the max sliding window.

// Example 1:
// Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
// Output: [3,3,5,5,6,7]
// Explanation:
// Window position                Max
// ---------------               -----
// [1  3  -1] -3  5  3  6  7       3
//  1 [3  -1  -3] 5  3  6  7       3
//  1  3 [-1  -3  5] 3  6  7       5
//  1  3  -1 [-3  5  3] 6  7       5
//  1  3  -1  -3 [5  3  6] 7       6
//  1  3  -1  -3  5 [3  6  7]      7

//  Example 2:
// Input: nums = [1], k = 1
// Output: [1]

// Initial solution. Improvements would be to not have to slice and reduce for each window.
const _maxSlidingWindow = (nums, k) => {
  const res = [];
  let left = 0;
  let right = k;

  while(right <= nums.length) {
    const group = nums.slice(left, right);
    const max = group.reduce((acc, num) => Math.max(acc, num), Number.MIN_VALUE);
    res.push(max);
    left++;
    right++
  }

  return res;
};

// Optimize above to reduce the amount of loops:
// This strategy should spped things up by a bit. The only edge case where we take a speed hit is
// the reduce op to find a new currMax in an unknown group. Otherwise we save two loops per iteration.
const maxSlidingWindow = (nums, k) => {
  const res = [];
  let left = 0;
  let right = k-1;

  // Pre-seed the group with the first k numbers and find its max val.
  let group = [];
  let currMax = Number.MIN_VALUE;

  for (let i = 0; i < k; i++) {
    currMax = Math.max(currMax, nums[i]);
    group.push(nums[i]);
  }

  // Push the currMax of the first window group.
  res.push(currMax);

  while(right < nums.length-1) {
    left++;
    right++
    group.push(nums[right]);

    // Remove the first item in the group to maintain k items.
    const leftNum = group.shift();

    // If the item being removed equals the currMax, we need to find a new max value within the current
    // window; Only if the new number coming in is less than the last currMax. Else, set the new max directly.
    if (leftNum === currMax && nums[right] < currMax) {
      currMax = group.reduce((acc, num) => Math.max(acc, num), Number.MIN_VALUE);
    } else {
      currMax = Math.max(currMax, nums[right]);
    }

    res.push(currMax);
  }

  return res;
};

export default maxSlidingWindow;
