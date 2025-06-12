// 120. Triangle - https://leetcode.com/problems/triangle/

// Given a triangle array, return the minimum path sum from top to bottom.

// For each step, you may move to an adjacent number of the row below. More formally, if you are on index i on the current row, you may move to either index i or index i + 1 on the next row.

// Example 1:
// Input: triangle = [[2],[3,4],[6,5,7],[4,1,8,3]]
// Output: 11
// Explanation: The triangle looks like:
//    2
//   3 4
//  6 5 7
// 4 1 8 3
// The minimum path sum from top to bottom is 2 + 3 + 5 + 1 = 11 (underlined above).

// Example 2:
// Input: triangle = [[-10]]
// Output: -10

const minimumTotal = (triangle) => {
  let prevIdx = 0;
  let sum = triangle[0][0];

  triangle.slice(1).forEach((arr) => {
    const curr = arr[prevIdx];
    const next = arr[prevIdx + 1] || null;

    if (curr < next || next === null) {
      sum += curr;
    } else {
      sum += next;
      prevIdx += 1;
    }
  });

  return sum;
};

export default minimumTotal;
