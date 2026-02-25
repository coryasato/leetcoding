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
const _smallestRect = (matrix, x, y) => {
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

const smallestRect = (matrix, x, y) => {
  const coords = {
    bottom: x,
    left: y,
    right: y,
    top: x,
  };
  const queue = [[x, y]];
  const seen = new Set();

  // Helper functions.
  const createKey = (row, col) => `${row}-${col}`;

  const enqueueCoords = (row, col) => {
    const key = createKey(row, col);
    // NOTE: Mind the side effects with "seen" and "queue" in scope. If buggy, revert to a pure, non-mutative function.
    if (!seen.has(key)) {
      seen.add(key);
      queue.push([row, col]);
    }
  };

  // Memoize the initial cell.
  seen.add(createKey(x, y));

  while (queue.length > 0) {
    const [row, col] = queue.shift();

    // Update furthers coordinates that we visit.
    if (row < coords['top']) { coords['top'] = row; }

    if (row > coords['bottom']) { coords['bottom'] = row; }

    if (col < coords['left']) { coords['left'] = col; }

    if (col > coords['right']) { coords['right'] = col; }

    // Look around the cell and determine if an adjacent cell connects on all directions.
    // Queue any adjacent "black pixel" cell that has not already been seen.
    if (row > 0 && matrix[row-1] && matrix[row-1][col] === '1') { enqueueCoords((row-1), col); }

    if (row < matrix.length && matrix[row+1] && matrix[row+1][col] === '1') { enqueueCoords((row+1), col); }

    if (col > 0 && matrix[row][col-1] === '1') { enqueueCoords(row, (col-1)); }

    if (col < matrix[row].length && matrix[row][col+1] === '1') { enqueueCoords(row, (col+1)); }
  }

  return ((coords['bottom'] - coords['top']) + 1) * ((coords['right'] - coords['left']) + 1);
};

export default smallestRect;
