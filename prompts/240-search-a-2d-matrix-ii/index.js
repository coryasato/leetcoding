// 240. Search a 2D Matrix II - https://leetcode.com/problems/search-a-2d-matrix-ii/

// Write an efficient algorithm that searches for a value target in an m x n integer matrix matrix. This matrix has the following properties:

// Integers in each row are sorted in ascending from left to right.
// Integers in each column are sorted in ascending from top to bottom.

// Example 1:
// Input: matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 5
// Output: true

// Example 2:
// Input: matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 20
// Output: false

// Initial solution, less than 30 seconds to write, inefficient.
const _searchMatrix = (matrix, target) => {
  return matrix.reduce((acc, row) => {
    if (acc) return acc;
    const index = row.findIndex(cell => cell === target);
    return index > -1;
  }, false);
};

// Second solution:
// This will skip over rows based on their last item and limit the range of x to pincer the
// probable target to the lower left of the matrix. We could further speed up this op by doing a binary search on
// each row, but we lose the "j" index placement if we need it to further limit the range of x. We could memoize the j indexes
// with a bit of math if we really wanted both of best worlds. In hindsight, a binary search per row would be likely faster given
// a large matrix.
const searchMatrix = (matrix, target) => {
  let res = false;
  let xRange = matrix[0].length;

  for (let i = 0; i < matrix.length; i++) {
    if (res === true) break;
    // Skip the current row if the target is greater than the last element.
    if (target > matrix[i][matrix[i].length-1]) continue;

    for (let j = 0; j < xRange; j++) {
      const cell = matrix[i][j];

      if (cell === target) {
        res = true;
        break;
      }
      // Limit the x range of how far we loop into a row.
      if (cell > target) {
        xRange = Math.min(xRange, j);
        continue;
      }
    }
  }

  return res;
};

export default searchMatrix;
