// 268. Missing Number - https://leetcode.com/problems/missing-number/

// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

// Example 1:
// Input: nums = [3,0,1]
// Output: 2
// Explanation:
// n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.

// Example 2:
// Input: nums = [0,1]
// Output: 2
// Explanation:
// n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in nums.

// Example 3:
// Input: nums = [9,6,4,2,3,5,7,0,1]
// Output: 8
// Explanation:
// n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 8 is the missing number in the range since it does not appear in nums.

const _missingNumber = (nums) => {
  const arr = new Array(nums.length+1).fill(null);

  nums.forEach(num => {
    arr[num] = num;
  });

  return arr.findIndex(n => n === null);
};

// Follow up: Could you implement a solution using only O(1) extra space complexity and O(n) runtime complexity?
const missingNumber = (nums) => {
  let numSum = 0;

  // Sum the range of items in the array.
  // If theres 3 items, then we want to sum 0 <> 3 (0+1+2+3) = 6.
  for (let i = 1; i < nums.length+1; i++) {
    numSum += i;
  }

  // Subtract the numbers that exist in the nums array.
  for (let i = 0; i < nums.length; i++) {
    numSum -= nums[i];
  }

  // The remaining amount will be the missing number.
  return numSum;

};

export default missingNumber;
