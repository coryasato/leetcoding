// 53. Maximum Subarray - https://leetcode.com/problems/maximum-subarray

// Given an integer array nums, find the subarray with the largest sum, and return its sum.

// Example 1:
// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: The subarray [4,-1,2,1] has the largest sum 6.

// Example 2:
// Input: nums = [1]
// Output: 1
// Explanation: The subarray [1] has the largest sum 1.

// Example 3:
// Input: nums = [5,4,-1,7,8]
// Output: 23
// Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.

// This helper uses a divide and conquer strategy but its slower than the one used in the main fn.
// Left this here as asks if we could do the prompt w/ this strategy.
// One optimization we could make here to both strats is:
// 1) Do not store all sub arrays as it takes up alot of space, potentially.
// 2) Calcluate the sum in the gathering part of the algo and update a integer variable if the sum of the array is larger than the variable.
const _getAllSubArraysRecursive = (arr) => {
  let subArrays = [];

  const getSubs = (left, right) => {
    if (left > right) return;
    if (left === right) {
      subArrays.push([arr[left]]);
      return;
    }

    const mid = Math.floor((left + right) / 2);

    getSubs(left, mid);
    getSubs(mid + 1, right);

    for (let i = left; i <= mid; i++) {
      for (let j = mid + 1; j <= right; j++) {
        subArrays.push(arr.slice(i, j + 1));
      }
    }
  };

  getSubs(0, arr.length-1);
  return subArrays;
};

const _getAllSubArrays = (arr) => {
  let subArrays = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      subArrays.push(arr.slice(i, j + 1));
    }
  }

  return subArrays;
}

const _sumArr = arr => arr.reduce((acc, n) => (acc + n), 0);

const maxSubArray = (nums) => {
  return _getAllSubArrays(nums).reduce((acc, arr) => {
    const sum = _sumArr(arr);
    return sum > acc ? sum : acc;
  }, 0);
};

export default maxSubArray;
