// 119. Pascal's Triangle II - https://leetcode.com/problems/pascals-triangle-ii/

// Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

// Example 1:
// Input: rowIndex = 3
// Output: [1,3,3,1]

// Example 2:
// Input: rowIndex = 0
// Output: [1]

// Example 3:
// Input: rowIndex = 1
// Output: [1,1]

const getRow = (rowIndex) => {
  let res = [[1]];
  let i = 1;

  while (i <= rowIndex) {
    const count = i + 1;
    const prev = res[res.length - 1];

    const entry = Array.from(new Array(count), (_, ii) => {
      if (ii === 0 || ii === i) return 1;
      return prev[ii-1] + prev[ii];
    });

    res.push(entry);
    i++;
  }

  return res[rowIndex];
};

export default getRow;
