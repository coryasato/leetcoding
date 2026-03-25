// https://leetcode.com/problems/sparse-matrix-multiplication/

// 311. Sparse Matrix Multiplication

// Given two sparse matrices mat1 of size m x k and mat2 of size k x n, return the result of mat1 x mat2. You may assume that multiplication is always possible.

// Example 1:
// Input: mat1 = [[1,0,0],[-1,0,3]], mat2 = [[7,0,0],[0,0,0],[0,0,1]]
// Output: [[7,0,0],[-7,0,3]]

// Example 2:
// Input: mat1 = [[0]], mat2 = [[0]]
// Output: [[0]]

const multiply = (mat1, mat2) => {
  // Build a matrix of M x N preseeded with zeroes.
  const res = Array.from(Array(mat1.length), () => Array.from(Array(mat2[0].length), () => 0));

  for (let i = 0; i < mat1.length; i++) {
    for (let j = 0; j < mat2[0].length; j++) {
      for (let k = 0; k < mat2.length; k++) {
        res[i][j] += mat1[i][k] * mat2[k][j];
      }
    }
  }

  return res;
};

export default multiply;
