// Roman to Integer - https://leetcode.com/problems/roman-to-integer/

// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9.
// X can be placed before L (50) and C (100) to make 40 and 90.
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given a roman numeral, convert it to an integer.

// Example 1:
// Input: s = "III"
// Output: 3
// Explanation: III = 3.

// Example 2:
// Input: s = "LVIII"
// Output: 58
// Explanation: L = 50, V= 5, III = 3.

// Example 3:
// Input: s = "MCMXCIV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

// NOTE: The conditionals are uggs. A way to remedy this would be to have each key map to a object with meta data.
// Then we would ask in one IF statement, does this key have a special condition?, if so then call its processing fn to return
// a processed value. So only "I", "X" and "C" would have these fns and they will internally host the logic.
const romanToInt = (str) => {
  str = str.toUpperCase();
  const map = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  };

  // The entries array is used to place "pockets" to skip an iteration. We could use a flag instead, but this helps if you want to log the array.
  // We could also just remove the "res" var and sum up the values in the entries array as well. However, that will add another loop.
  const entries = [];
  let res = 0;

  for (let i = 0; i <= str.length-1; i++) {
    const letter = str[i];
    const nextLetter = str[i+1] || null;

    // This index was accounted for, skip this iteration and move to the next.
    if (entries[i] === 0) continue;

    if (letter === 'I' && (nextLetter === 'V' || nextLetter === 'X')) {
      entries[i] = map[nextLetter] - 1;
      entries[i+1] = 0;

      res += map[nextLetter] - 1;
    } else if (letter === 'X' && (nextLetter === 'L' || nextLetter === 'C')) {
      entries[i] = map[nextLetter] - 10;
      entries[i+1] = 0;

      res += map[nextLetter] - 10;
    } else if (letter === 'C' && (nextLetter === 'D' || nextLetter === 'M')) {
      entries[i] = map[nextLetter] - 100;
      entries[i+1] = 0;

      res += map[nextLetter] - 100;
    } else {
      entries[i] = map[letter];
      res += map[letter];
    }
  }

  return res;
};

export default romanToInt;
