// 168. Excel Sheet Column Title - https://leetcode.com/problems/excel-sheet-column-title/

// Given an integer columnNumber, return its corresponding column title as it appears in an Excel sheet.

// For example:

// A -> 1
// B -> 2
// C -> 3
// ...
// Z -> 26
// AA -> 27
// AB -> 28
// ...

// Example 1:
// Input: columnNumber = 1
// Output: "A"

// Example 2:
// Input: columnNumber = 28
// Output: "AB"

// Example 3:
// Input: columnNumber = 701
// Output: "ZY"

// NOTE: Theres likely a better way to do this with math. The current strategy is like a flip clock.
const convertToTitle = (columnNum) => {
  const CAPITAL_A_CODE = 65;
  const letters = Array.from(Array(26), (_, i) => String.fromCharCode(CAPITAL_A_CODE + i));

  if (columnNum < 27) return letters[columnNum-1];

  const res = [];
  let num = columnNum;

  while (num > 0) {
    if (num < 27) {
      res.push(letters[num-1]);
      break;
    } else {
      // Substract an entire alphabet range.
      num -= 26;
      // If we have items in the res array, then we either
      // 1. Flip the preceeding item from Z to A as we'eve exhausting this range and push another A to the key.
      // 2. Increment the preceeding item by one letter forward (charCodeAt gives us 66 for "B", add one for "C", subtract 65 to get the 0-based index in letters).
      if (res.length > 0) {
        if (res[res.length-1] === 'Z') {
          res[res.length-1] = 'A';
          res.push('A');
        } else {
          res[res.length-1] = letters[((res[res.length-1].charCodeAt() + 1) - CAPITAL_A_CODE)]
        }
      } else {
        // Initial seed of res.
        res.push('A');
      }
    }
  }

  return res.join('');
};

export default convertToTitle;
