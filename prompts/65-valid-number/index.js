// 65. Valid Number - https://leetcode.com/problems/valid-number/

// Given a string s, return whether s is a valid number.

// For example, all the following are valid numbers: "2", "0089", "-0.1", "+3.14", "4.", "-.9", "2e10", "-90E3", "3e+7", "+6e-1", "53.5e93", "-123.456e789", while the following are not valid numbers: "abc", "1a", "1e", "e3", "99e2.5", "--6", "-+3", "95a54e53".

// Formally, a valid number is defined using one of the following definitions:

// An integer number followed by an optional exponent.
// A decimal number followed by an optional exponent.
// An integer number is defined with an optional sign '-' or '+' followed by digits.

// A decimal number is defined with an optional sign '-' or '+' followed by one of the following definitions:

// Digits followed by a dot '.'.
// Digits followed by a dot '.' followed by digits.
// A dot '.' followed by digits.
// An exponent is defined with an exponent notation 'e' or 'E' followed by an integer number.

// The digits are defined as one or more digits.

// Example 1:
// Input: s = "0"
// Output: true

// Example 2:
// Input: s = "e"
// Output: false

// Example 3:
// Input: s = "."
// Output: false

// I would simply do this one liner in the real world:
// const isNumber = (str) => !isNaN(Number.parseInt(str) || Number.parseFloat(str));

// If the REX_EXs are making this function too slow, then we would have to do character checking instead.
// We could do string to string for the operators and some type of bit op for the digits.
const isNumber = (str) => {
  const NUM_REGEX = /[0-9]/;
  const NUM_SIGN_REGEX = /[0-9+-]/;

  let isValid = true;
  let eVisited = false;

  // Short circuit if the single entry is not a number.
  if (str.length === 1 && NUM_REGEX.test(str) === false) return false;

  for (let i = 0; i < str.length; i++) {
    const entry = str[i];

    if (entry === '+' || entry === '-') {                        // +- Operators
      if (i > 0 && NUM_REGEX.test(str[i+1]) === false) {
        isValid = false;
      }
      if (i > 0 && (str[i-1] === '+' || str[i-1] === '-' || str[i-1] === '.')) {
        isValid = false;
      }

    } else if (entry === 'e' || entry === 'E') {                 // Exponent Characters
      if (i === 0 || NUM_SIGN_REGEX.test(str[i+1]) === false) {
        isValid = false;
      }
      eVisited = true;  // No floats allowed beyond this point.
    } else if (entry === '.') {                                  // Dot Characters
      if (eVisited === true || (str[i+1] !== undefined && NUM_SIGN_REGEX.test(str[i+1]) === false)) {
        isValid = false;
      }
    } else if (NUM_REGEX.test(str[i]) === false) {              // Everything else
      isValid = false;
    }


    if (isValid === false) break;
  }

  return isValid;
};

export default isNumber;
