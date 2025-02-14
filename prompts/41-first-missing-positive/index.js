// 41. First Missing Positive - https://leetcode.com/problems/first-missing-positive

// Given an unsorted integer array nums. Return the smallest positive integer that is not present in nums.

// You must implement an algorithm that runs in O(n) time and uses O(1) auxiliary space.

// Example 1:
// Input: nums = [1,2,0]
// Output: 3
// Explanation: The numbers in the range [1,2] are all in the array.

// Example 2:
// Input: nums = [3,4,-1,1]
// Output: 2
// Explanation: 1 is in the array but 2 is missing.

// Example 3:
// Input: nums = [7,8,9,11,12]
// Output: 1
// Explanation: The smallest positive integer 1 is missing.

// TODO:
// This is currently a quatratic time function. The bubble sort top half of the fn needs to be changed to something faster.
// Space complexity is O(1).
const firstMissingPositive = (nums) => {
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    // Remove zero and below from array. The slice methods does extra work though, prob should think of a better way.
    if (num <= 0) {
      nums = nums.slice(0, i).concat(nums.slice(i+1));
      i -= 1;
      continue;
    }

    let n = i;
    while(n > 0) {
      if (nums[n] < nums[n-1]) {
        let temp = nums[n];
        nums[n] = nums[n-1];
        nums[n-1] = temp;
      }
      n--;
    }
  }

  // If the first index is not 1, then the smallest positive int must be 1. Return early.
  if (nums[0] !== 1) return 1;

  let answer = null;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i]+1 !== nums[i+1]) {
      answer = nums[i]+1;
      break;
    }
  }

  return answer;
};

export default firstMissingPositive;
