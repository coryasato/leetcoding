// 171. Excel Sheet Column Number - https://leetcode.com/problems/excel-sheet-column-number/

// Given a string columnTitle that represents the column title as appears in an Excel sheet, return its corresponding column number.

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
// Input: columnTitle = "A"
// Output: 1

// Example 2:
// Input: columnTitle = "AB"
// Output: 28

// Example 3:
// Input: columnTitle = "ZY"
// Output: 701

const titleToNumber = (columnTitle) => {
  const lettersMap = Array.from(Array(26), (_, i) => String.fromCharCode(65 + i))
    .reduce((acc, letter, i) => {
      acc[letter] = i+1;
      return acc;
    }, {});
  let res = 0;

  for (let i = 0; i < columnTitle.length; i++) {
    const letter = columnTitle[i];

    if (columnTitle.length > 0 && i !== columnTitle.length-1) {
      res += 26 * lettersMap[letter];
    } else {
      res += lettersMap[letter];
    }
  }

  return res;
};

export default titleToNumber;
