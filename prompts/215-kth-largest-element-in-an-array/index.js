// 215. Kth Largest Element in an Array - https://leetcode.com/problems/kth-largest-element-in-an-array

// Given an integer array nums and an integer k, return the kth largest element in the array.

// Note that it is the kth largest element in the sorted order, not the kth distinct element.

// Can you solve it without sorting?

// Example 1:
// Input: nums = [3,2,1,5,6,4], k = 2
// Output: 5

// Example 2:
// Input: nums = [3,2,3,1,2,4,5,5,6], k = 4
// Output: 4

// NOTE: This prompt asks to solve this without sorting. While the outer loop is O(N) the inner loops are k+1 at most. This is still sorting
// per se, so Im not sure this is a valid answer.
// Otherwise, the usual trick is to resort to some type of bitwise operation.
const findKthLargest = (nums, k) => {
  let arr = [];

  nums.forEach(num => {
    if (arr.length === k && (num > arr[k-1])) {
      // When the array is at k length, we need to insert the num in order and slice off the last item to maintain kth length.
      for (let i = 0; i < arr.length; i++) {
        if (num >= arr[i]) {
          arr = arr.slice(0, Math.max(i-1, 0)).concat(num).concat(arr.slice(i));
          break;
        }
      }
      arr = arr.slice(0, k);
    } else if (arr.length < k) {
      // When the array is under k length, fill it from largest to smallest.
      if (arr.length == 0) {
        arr.push(num);
      } else {
        for (let i = 0; i < arr.length; i++) {
          if (num >= arr[i]) {
            arr = arr.slice(0, Math.max(i-1, 0)).concat(num).concat(arr.slice(i));
            break;
          } else {
            arr = arr.slice(0, i).concat(num).concat(arr.slice(i+1));
            break;
          }
        }
      }
    }
  });

  // The last item will be our kth largest number.
  return arr[k-1];
};

export default findKthLargest;
