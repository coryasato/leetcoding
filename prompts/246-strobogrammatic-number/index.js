// 246. Strobogrammatic Number - https://leetcode.com/problems/strobogrammatic-number/

// A strobogrammatic number is a number that looks the same when rotated 180 degrees (looked at upside down).

// Write a function to determine if a number is strobogrammatic. The number is represented as a string.

// Example 1:
// Input:  "69"
// Output: true

// Example 2:
// Input:  "88"
// Output: true

// Example 3:
// Input:  "962"
// Output: false

const NUM_MAP = {
  '1': '1',
  '6': '9',
  '8': '8',
  '9': '6',
};

const isStrobogrammatic = (str) => {
  let i = 0;
  let j = str.length-1;
  let res = true;

  while (i <= j) {
    const key = str[i];

    // When the length is odd, the center char must be either "1" or "8".
    if (i === j && key !== '1' && key !== '8') {
      res = false;
      break;
    }

    if (!(NUM_MAP.hasOwnProperty(key)) || (NUM_MAP[key] !== str[j])) {
      res = false;
      break;
    }

    i++;
    j--;
  }

  return res;
};

export default isStrobogrammatic;
