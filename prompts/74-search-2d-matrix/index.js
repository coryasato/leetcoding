// 74. Search a 2D Matrix - https://leetcode.com/problems/search-a-2d-matrix/

// You are given an m x n integer matrix matrix with the following two properties:

// Each row is sorted in non-decreasing order.
// The first integer of each row is greater than the last integer of the previous row.
// Given an integer target, return true if target is in matrix or false otherwise.

// You must write a solution in O(log(m * n)) time complexity.

// Example 1:
// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
// Output: true

// Example 2:
// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
// Output: false

const searchMatrix = (matrix, target) => {
  let targetExists = false;

  for (let i = 0; i < matrix.length; i++) {
    const row = matrix[i];

    if (row[0] <= target && row[row.length-1] >= target) {
      // Target should be in this row.
      let arr = row;
      while (arr.length > 1) {
        const midIdx = arr.length % 2 === 0 ? Math.floor(arr.length / 2) : (Math.floor(arr.length / 2) + 1);

        if (arr[midIdx] === target) {
          targetExists = true;
          break;
        } else if (arr[midIdx] > target) {
          arr = arr.slice(0, midIdx);
        } else if (arr[midIdx] < target) {
          arr = arr.slice(midIdx);
        }
      }
      // Stop processing the outer loop, the correct row has already been processed.
      break;
    }
  }

  return targetExists;
};

export default searchMatrix;
