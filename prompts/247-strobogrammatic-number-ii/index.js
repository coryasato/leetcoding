// 247. Strobogrammatic Number II - https://leetcode.com/problems/strobogrammatic-number-ii/

// A strobogrammatic number is a number that looks the same when rotated 180 degrees (looked at upside down).

// Find all strobogrammatic numbers that are of length = n.

// Example:
// Input:  n = 2
// Output: ["11","69","88","96"]

import isStrobogrammatic from "../246-strobogrammatic-number";

const INCLUDE_SET = new Set(['1', '6', '8', '9']);

const isStrobogrammatic2 = (n) => {
  let start = Math.pow(10, n) / 10;
  const end = (Math.pow(10, n+1) / 10);
  const res =  [];

  while (start < end) {
    const str = start.toString();

    // Slight optimization: Check the first char to see if the string would be viable as a candidate before the expensive call.
    if (INCLUDE_SET.has(str[0]) && isStrobogrammatic(str)) {
      res.push(str);
    }

    start += 1;
  }

  return res;
};

export default isStrobogrammatic2;
