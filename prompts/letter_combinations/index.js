// 17. Letter Combinations of a Phone Number - https://leetcode.com/problems/letter-combinations-of-a-phone-number

// Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

// A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

// Example 1:
// Input: digits = "23"
// Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]

// Example 2:
// Input: digits = ""
// Output: []

// Example 3:
// Input: digits = "2"
// Output: ["a","b","c"]

const LETTERS = [
  [],
  [],
  ['a','b','c'],
  ['d','e','f'],
  ['g','h','i'],
  ['j','k','l'],
  ['m','n','o'],
  ['p','q','r', 's'],
  ['t', 'u', 'v'],
  ['w','x','y', 'z'],
];

const letterCombinations = (digits) => {
  if (digits === '') return [];

  const startIdx = parseInt(digits.slice(0, 1), 10);
  const endIdx = parseInt(digits.slice(-1), 10) + 1;
  const lettersArr = LETTERS.slice(startIdx, endIdx).filter(arr => (arr.length > 0));

  const recurse = (str="", idx=0, arr=[]) => {
    if (idx === lettersArr.length) {
      return arr.concat(str);
    }

    const letters = lettersArr[idx];
    for (let letter of letters) {
      arr = recurse(str.concat(letter), idx+1, arr);
    }

    return arr;
  };

  return recurse();
};

export default letterCombinations;
