// 80. Remove Duplicates from Sorted Array II - https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii

// Given an integer array nums sorted in non-decreasing order, remove some duplicates in-place such that each unique element appears at most twice. The relative order of the elements should be kept the same.

// Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.

// Return k after placing the final result in the first k slots of nums.

// Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.

// Example 1:
// Input: nums = [1,1,1,2,2,3]
// Output: 5, nums = [1,1,2,2,3,_]
// Explanation: Your function should return k = 5, with the first five elements of nums being 1, 1, 2, 2 and 3 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).

// Example 2:
// Input: nums = [0,0,1,1,1,1,2,3,3]
// Output: 7, nums = [0,0,1,1,2,3,3,_,_]
// Explanation: Your function should return k = 7, with the first seven elements of nums being 0, 0, 1, 1, 2, 3 and 3 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).

const removeDuplicates = (nums) => {
  let result = 0;
  let map = {};

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    // Once we hit a '_' char, we are done looping.
    if (num === '_') break;

    // Hit the third or more repeating "num", we need shuffle every folloiwng "num" to the left.
    if (map[num] && map[num] >= 2) {
      let n = i;
      while (n < nums.length) {
        if (n + 1 >= nums.length) break;
        let next = nums[n+1];
        nums[n] = next;
        nums[n+1] = '_';
        n++;
      }
      // Reset the iterator to check the swapped number.
      i = i - 1;
    } else if (map.hasOwnProperty(num)) {
      map[num] = map[num] + 1;
      // Limit the count per entry by 2.
      if (map[num] <= 2) { result++; }
    } else {
      map[num] = 1;
      result++;
    }
  }

  return result;
};

export default removeDuplicates;
