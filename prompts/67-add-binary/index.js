// 67. Add Binary - https://leetcode.com/problems/add-binary/
// Given two binary strings a and b, return their sum as a binary string.

// Example 1:
// Input: a = "11", b = "1"
// Output: "100"

// Example 2:
// Input: a = "1010", b = "1011"
// Output: "10101"

const addBinary = (a, b) => {
  let res = '';
  let carry = '0';
  let cursorA = a.length;
  let cursorB = b.length;

  // We loop backwards through each argument and allow for differing lengths. As long as an argument is not exhausted,
  // we continue the loop.
  while (cursorA > 0 || cursorB > 0) {
    // Start decrementing the cursor in the loop in case of single "digit" strings.
    cursorA = Math.max(cursorA - 1, 0);
    cursorB = Math.max(cursorB - 1, 0);

    // Utilize two cursors to allow mismatch between strings. If a string is exhausted, its "ghost" number will be "0".
    let aa = a[cursorA] || '0';
    let bb = b[cursorB] || '0';
    const combo = aa.concat(bb);

    if (combo === '11') {
      carry = '1';
      res = '0'.concat(res);
    } else if (combo === '10' || combo === '01') {
      if (carry === '1') {
        res = '0'.concat(res);
      } else {
        res = '1'.concat(res);
      }
    } else {
      if (carry === '1') {
        res = '1'.concat(res);
        carry = '0';
      } else {
        res  = '0'.concat(res);
      }
    }
  }
  // If there is a lingering "carry" of "1", we need to process it.
  if (carry === '1') {
    if (res[0] === '1') {
      res = '10'.concat(res);
    } else {
      res = carry.concat(res);
    }
  }

  return res;
};

export default addBinary;
