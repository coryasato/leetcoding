// Integer to Roman - https://leetcode.com/problems/integer-to-roman/

// Seven different symbols represent Roman numerals with the following values:

// Symbol	Value
// I	1
// V	5
// X	10
// L	50
// C	100
// D	500
// M	1000

// Roman numerals are formed by appending the conversions of decimal place values from highest to lowest. Converting a decimal place value into a Roman numeral has the following rules:

// If the value does not start with 4 or 9, select the symbol of the maximal value that can be subtracted from the input, append that symbol to the result, subtract its value, and convert the remainder to a Roman numeral.
// If the value starts with 4 or 9 use the subtractive form representing one symbol subtracted from the following symbol, for example, 4 is 1 (I) less than 5 (V): IV and 9 is 1 (I) less than 10 (X): IX. Only the following subtractive forms are used: 4 (IV), 9 (IX), 40 (XL), 90 (XC), 400 (CD) and 900 (CM).
// Only powers of 10 (I, X, C, M) can be appended consecutively at most 3 times to represent multiples of 10. You cannot append 5 (V), 50 (L), or 500 (D) multiple times. If you need to append a symbol 4 times use the subtractive form.
// Given an integer, convert it to a Roman numeral.

// Example 1:
// Input: num = 3749
// Output: "MMMDCCXLIX"
// Explanation:
// 3000 = MMM as 1000 (M) + 1000 (M) + 1000 (M)
//  700 = DCC as 500 (D) + 100 (C) + 100 (C)
//   40 = XL as 10 (X) less of 50 (L)
//    9 = IX as 1 (I) less of 10 (X)
// Note: 49 is not 1 (I) less of 50 (L) because the conversion is based on decimal places

// Example 2:
// Input: num = 58
// Output: "LVIII"
// Explanation:
// 50 = L
//  8 = VIII

//  Example 3:
// Input: num = 1994
// Output: "MCMXCIV"
// Explanation:
// 1000 = M
//  900 = CM
//   90 = XC
//    4 = IV

const intToStr = (num, base, digit) => {
  const map = {
    1: 'I',
    5: 'V',
    10: 'X',
    50: 'L',
    100: 'C',
    500: 'D',
    1000: 'M'
  };
  let clone = num;
  let res = '';

  while(clone > 0) {
    if (digit !== 4 && digit !== 9) {
      const cDigit = clone / base;

      if (cDigit >= 6 && cDigit <= 8) {
        const temp = base*5;

        res += map[temp];
        clone -= temp;
      } else {
        const key = map.hasOwnProperty(num) ? num : base;
        res += map[key];
        clone -= key;
      }
    } else {
      const temp = base+num;

      res += map[base].concat(map[temp]);
      clone -= temp;
    }
  }

  return res;
};

export const intToRomanDebug = (num) => {
  const len = Math.ceil(Math.log10(num+1));
  let clone = num;
  let entries = [];

  for (let i = len-1; i > -1; i--) {
    const base = Math.pow(10, i);
    const digit = Math.floor(clone / base);
    const full = base * digit;
    const str = intToStr(full, base, digit);

    clone = clone - full;
    entries.push([full, str]);
  }

  // This will list a 2d array of numbers and their relevant roman numeral strings.
  // Ex: 3512 = [[3000, "MMM"], [500, "D"], [10, "X"], [2, "II"]]
  return entries;
};

const intToRoman = (num) => {
  const len = Math.ceil(Math.log10(num+1));
  let clone = num;
  let res = '';

  for (let i = len-1; i > -1; i--) {
    const base = Math.pow(10, i);
    const digit = Math.floor(clone / base);
    const full = base * digit;
    const str = intToStr(full, base, digit);

    res += str
    clone = clone - full;
  }

  return res;
};

export default intToRoman;
