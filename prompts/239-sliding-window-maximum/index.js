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

const maxSlidingWindow = (nums, k) => {
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

export default maxSlidingWindow;
