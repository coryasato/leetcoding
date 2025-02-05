// 31. Next Permutation - https://leetcode.com/problems/next-permutation

// A permutation of an array of integers is an arrangement of its members into a sequence or linear order.

// For example, for arr = [1,2,3], the following are all the permutations of arr: [1,2,3], [1,3,2], [2, 1, 3], [2, 3, 1], [3,1,2], [3,2,1].
// The next permutation of an array of integers is the next lexicographically greater permutation of its integer. More formally, if all the permutations of the array are sorted in one container according to their lexicographical order, then the next permutation of that array is the permutation that follows it in the sorted container. If such arrangement is not possible, the array must be rearranged as the lowest possible order (i.e., sorted in ascending order).

// For example, the next permutation of arr = [1,2,3] is [1,3,2].
// Similarly, the next permutation of arr = [2,3,1] is [3,1,2].
// While the next permutation of arr = [3,2,1] is [1,2,3] because [3,2,1] does not have a lexicographical larger rearrangement.
// Given an array of integers nums, find the next permutation of nums.

// The replacement must be in place and use only constant extra memory.

// Example 1:
// Input: nums = [1,2,3]
// Output: [1,3,2]

// Example 2:
// Input: nums = [3,2,1]
// Output: [1,2,3]

// Example 3:
// Input: nums = [1,1,5]
// Output: [1,5,1]

const nextPermutation = (nums) => {
  const len = nums.length-1;
  let pivot = -1;

  // Find the index to swap.
  for (let i = len-1; i > 0; i--) {
    if (nums[i] < nums[i+1]) {
      pivot = i;
      break;
    }
  }
  // Early reverse return. The array is in descending order.
  if (pivot === -1) {
    const mid = Math.floor(nums.length / 2);
    let counter = 0;

    for (let i = nums.length-1; i > 0; i--) {
      const num = nums[i];
      const first = nums[counter];

      if (i === mid) break;

      nums[i] = first;
      nums[counter] = num;
      counter++;
    }

    return nums;
  }

  // Swap the smallest number from the right side of the array with the pivot index.
  for (let i = len; i > pivot; i--) {
    if (nums[i] > nums[pivot]) {
      const temp = nums[i];
      nums[i] = nums[pivot];
      nums[pivot] = temp;
      break;
    }
  }
  // Reverse the right side of the array following the pivot index. This is to shuffle the numbers for the next proper permutation.
  let counter = len;
  for (let i = pivot+1; i < len; i++) {
    const num = nums[i];
    nums[i] = nums[counter];
    nums[counter] = num;
    counter--;
  }

  return nums;
};

export default nextPermutation;
