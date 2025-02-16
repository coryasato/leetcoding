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

// NOTE:
// This is a quatratic time function. The bubble sort top half of the fn needs to be changed to something faster.
// Space complexity is O(1).
const _firstMissingPositive = (nums) => {
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

// NOTE:
// Had to look this one up!
// 1) Flip all negative and out of bound integers to zero. OOB past the length of the array will be ints we don't care about.
//    Example: [50,1,0,3,10] => We know there are smaller numbers that may or may not exist than 50 or 10.
//    Example: [7,8,9]       => We know that the answer here is 1.
//
// 2) This is the clever part; We utilize an integer as a constant index. So the same integer will always have the same index as we mutate
//    the initial array. In this way, we can say, "index ZERO will always be where integer ONE exists in the array". If we have seen integer ONE,
//    then index ZERO will be incremented by its current value PLUS the length of the array.
//    Example: [1,2,3]       => Results to [5, 6, 7].
//    Example: [3,2,1]       => Results to [7, 6, 5].
//    Example: [3,0,1]       => Results to [7, 0, 5].
//
// 3) Lastly, we find the first index that is less than the length of the array and increment by one.
//    Example: [3,0,1]       => Results to [7, 0, 5] | This is saying, we haven't seen index 1 since its less than the length of the array (3) and this is where integer 2 should live.

// Time: O(n) | Space: O(1)
const firstMissingPositive = (nums) => {
  let len = nums.length;

  for (var i = 0; i < nums.length; i++) {
    if (nums[i] < 0 || nums[i] > len) {
      nums[i] = 0;
    }
  }

  for (var i = 0; i < nums.length; i++) {
    if (nums[i] % (len + 1) <= len) {
      const idx = ((nums[i] % (len + 1)) - 1);
      nums[idx] += (len+1);
    }
  }

  for (var i = 0; i < nums.length; i++) {
    if (nums[i] <= len) {
      return i + 1;
    }
  }

  return len + 1;
};

export default firstMissingPositive;
