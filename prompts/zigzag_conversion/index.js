// https://leetcode.com/problems/zigzag-conversion/description/

import { parseArgs } from 'util';

const { values } = parseArgs({
  args: Bun.argv,
  options: {
    str: { type: 'string'},
    numRows: { type: 'string' }
  },
  strict: true,
  allowPositionals: true
});

// Helper method is here so that we can print the matrix out to the conosole.
const reduceToString = function(matrix) {
  return matrix.reduce((acc, arr) => {
    acc += arr.filter(l => l !== '').join('');
    return acc;
  }, '');
};

// Optimization ideas: 
// 1. Build the string inline when assigning the letters to the matrix. Is there a way where we could build the string without so many loops?
// 1.a Theres likely an simple algo where we could math out the letter positions utilizing the numRows restriction. This way we wouldn't have to rely on the matrix data structure.
const convert = function(s, numRows) {
  const rangeLimit = numRows-1;
  
  const matrix = [...Array.from(new Array(numRows).keys()).map(n => [])];
  let x = 0;
  let y = 0;
  let isTraversing = false;
  
  for (const letter of s) {
    if (y <= rangeLimit && isTraversing === false) {  // Fill in the columns, north to south.
      matrix[y][x] = letter;

      if (y === rangeLimit) {
        isTraversing = true;
      }

      if (y < rangeLimit) {
        y = y + 1;
      }

    } else if (isTraversing === true) {  // Traverse diagonally to the upper right.
      x = x + 1; // MOVE ONE ACROSS
      y = y - 1; // MOVE ONE UP

      matrix[y][x] = letter;

      if (y === 0) {
        isTraversing = false;
        y = 1;  // WE CONSUMED THE CHAR AT THE 0 INDEX, START AT INDEX Y-1 ON THE NEXT ROW
      }
    }
  } 

  return matrix;
};

const args = [
  Object.hasOwn(values, 'str') ? values.str : "PAYPALISHIRING",
  Object.hasOwn(values, 'numRows') ? parseInt(values.numRows) : 5
]

const result = convert(...args);
console.log(result.join('\n'));
console.log(reduceToString(result));
