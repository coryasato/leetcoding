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
  let start = 0;
  let end = matrix.length-1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);

    if (matrix[mid][0] <= target && matrix[mid][matrix[mid].length-1] >= target) {
      // Potential row found for target.
      const arr = matrix[mid];
      let head = 0;
      let tail = arr.length-1;

      while (head < tail) {
        const midIdx = Math.floor((head + tail) / 2);

        if (arr[midIdx] === target) {
          targetExists = true;
          break;
        } else if (arr[midIdx] > target) {
          tail = midIdx;
        } else {
          head = midIdx+1;
        }
      }

      // Break the outer loop.
      break;
    } else if (matrix[mid][0] > target) {
      // Looks in the first half of the array.
      end = mid;
    } else {
      // Looks in the last half of the array.
      start = mid+1;
    }
  }

  return targetExists;
};

export default searchMatrix;
