// 302. Smallest Rectangle Enclosing Black Pixels - https://leetcode.com/problems/smallest-rectangle-enclosing-black-pixels/

// Description
// You are given an m x n binary matrix image where 0 represents a white pixel and 1 represents a black pixel.

// The black pixels are connected (i.e., there is only one black region). Pixels are connected horizontally and vertically.

// Given two integers x and y that represents the location of one of the black pixels, return the area of the smallest (axis-aligned) rectangle that encloses all black pixels.

// You must write an algorithm with less than O(mn) runtime complexity

// Example 1:
// Input: image = [["0","0","1","0"],["0","1","1","0"],["0","1","0","0"]], x = 0, y = 2
// Output: 6

// Example 2:
// Input: image = [["1"]], x = 0, y = 0
// Output: 1

// NOTE: Brute force attempt. Does not meet the, "less than O(mn)" constraint.
// To meet that constraint, we're going to have to do cell traversal for each potential direction per cell.
const smallestRect = (matrix, x, y) => {
  let top = x;
  let bottom = x;
  let left = y;
  let right = y;

  matrix.forEach((row, i) => {
    row.forEach((cell, j) => {
      if (cell === '1') {
        if (i < top) {
          top = i;
        }

        if (i > bottom) {
          bottom = i;
        }

        if (j < left) {
          left = j;
        }

        if (j > right) {
          right = j;
        }
      }
    });
  });

  return ((bottom - top) + 1) * ((right - left) + 1);
};

console.log(smallestRect([["0","0","1","0"],["0","1","1","0"],["0","1","0","0"]], 0, 2));
console.log(smallestRect([["1"]], 0, 0));

export default smallestRect;
