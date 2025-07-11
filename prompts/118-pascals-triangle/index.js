// 118. Pascal's Triangle - https://leetcode.com/problems/pascals-triangle/

// Given an integer numRows, return the first numRows of Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

// Example 1:
// Input: numRows = 5
// Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

// Example 2:
// Input: numRows = 1
// Output: [[1]]

const generate = (numRows) => {
  let res = [[1]];
  let i = 1;

  while (i < numRows) {
    const count = i + 1;
    const prev = res[res.length - 1];

    const entry = Array.from(new Array(count), (_, ii) => {
      if (ii === 0 || ii === i) return 1;
      return prev[ii-1] + prev[ii];
    });

    res.push(entry);
    i++;
  }

  return res;
};

export default generate;
