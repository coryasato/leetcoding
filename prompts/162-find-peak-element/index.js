// 162. Find Peak Element - https://leetcode.com/problems/find-peak-element/

// A peak element is an element that is strictly greater than its neighbors.

// Given a 0-indexed integer array nums, find a peak element, and return its index. If the array contains multiple peaks, return the index to any of the peaks.

// You may imagine that nums[-1] = nums[n] = -∞. In other words, an element is always considered to be strictly greater than a neighbor that is outside the array.

// You must write an algorithm that runs in O(log n) time.

// Example 1:
// Input: nums = [1,2,3,1]
// Output: 2
// Explanation: 3 is a peak element and your function should return the index number 2.

// Example 2:
// Input: nums = [1,2,1,3,5,6,4]
// Output: 5
// Explanation: Your function can return either index number 1 where the peak element is 2, or index number 5 where the peak element is 6.

const findPeakElement = (nums) => {
  let arr = nums.slice();
  let idxs = Array.from(Array(arr.length), (_, i) => i);
  let res = null;

  while (arr.length > 2) {
    // Base case: when the arr has 3-4 items in it. We can check the indexes directly for peaks of 3 items.
    // Example: [1,2,1] | [1,2,1,_] | [_,5,6,4]
    if (arr.length <= 4) {
      if (arr[0] < arr[1] && arr[1] > arr[2]) {
        res = idxs[1];
        break;
      } else if (arr[1] < arr[2] && arr[2] > arr[3]) {
        res = idxs[2]
        break;
      }
    }

    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);
    // NOTE: This is arbitrary since the nums argument is not sorted and the contraint is O(log n). It
    // doesn't really matter if we go left of right for this prompt as "any" peak will do. The decisions here
    // is hoping the larger array will have a peak in it. If we strictly needed to look into both sides, then our
    // constraint will bleed into O(n).
    if (left > right) {
      idxs = idxs.slice(0, mid);
      arr = left;
    } else {
      idxs = idxs.slice(mid);
      arr = right;
    }
  }

  return res;
};

export default findPeakElement;
