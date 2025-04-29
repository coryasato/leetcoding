// 85. Maximal Rectangle - https://leetcode.com/problems/maximal-rectangle/

// Given a rows x cols binary matrix filled with 0's and 1's, find the largest rectangle containing only 1's and return its area.

// Example 1:
// Input: matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]
// Output: 6
// Explanation: The maximal rectangle is shown in the above picture.

// Example 2:
// Input: matrix = [["0"]]
// Output: 0

// Example 3:
// Input: matrix = [["1"]]
// Output: 1

// Thoughts:
// Tried to do this in one loop through the matrix where we visit each cell only once.
// The trade-off is the memory used in the "combos" object and other combo arrays.
const maximalRectangle = (matrix) => {
  // Short circuit for one row. The rest of the fn relies on 2 or more rows.
  if (matrix.length === 1) return matrix[0].filter(item => item === '1').length;

  let combos = {};
  let result = 0;

  matrix.forEach((row, i) => {
    let xAxisCombo = [];
    let yAxisCombo = [];

    row.forEach((item, j) => {
      if (item === "1") {
        // Below will handle repeating "1"s on a single row.
        if (xAxisCombo.length > 0) {
          xAxisCombo = (xAxisCombo[xAxisCombo.length-1] === (j - 1)) ? xAxisCombo.concat(j): [];
          // Account for repeating X axis items.
          result = Math.max(result, xAxisCombo.length);
        } else {
          xAxisCombo = xAxisCombo.concat(j);
        }

        // Below will handle Y axis and larger rectangles.
        if (i > 0) {
          // Looking at the previous row, match indices where "1"s occur and memoize the combinations.
          if (matrix[i-1][j] === '1') {
            yAxisCombo.push(j);

            // Memoize every occurring "1" per row and combinations of.
            const key = yAxisCombo.join('');
            if (key in combos) {
              combos[key] += 1;
            } else {
              combos[key] = 2;
            }

            // Calculate the repeating combos per row. The key will be compound indexes of repeating indices.
            result = Math.max(result, (key.length * combos[key]));
          } else {
            // Break the combo if the previous row's j index is not '1'.
            yAxisCombo = [];
          }
        }
      } else {
        // Break the combo when we hit a '0' cell.
        xAxisCombo = []
        yAxisCombo = [];
      }
    });
  });
  // Log the combos object if theres confusion with how we memoize them. It'll clarify the logic.
  // console.log({combos});
  return result;
};

export default maximalRectangle;
