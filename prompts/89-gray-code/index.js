// 89. Gray Code - https://leetcode.com/problems/gray-code/
//
// An n-bit gray code sequence is a sequence of 2n integers where:

// Every integer is in the inclusive range [0, 2n - 1],
// The first integer is 0,
// An integer appears no more than once in the sequence,
// The binary representation of every pair of adjacent integers differs by exactly one bit, and
// The binary representation of the first and last integers differs by exactly one bit.
// Given an integer n, return any valid n-bit gray code sequence.

// Example 1:
// Input: n = 2
// Output: [0,1,3,2]
// Explanation:
// The binary representation of [0,1,3,2] is [00,01,11,10].
// - 00 and 01 differ by one bit
// - 01 and 11 differ by one bit
// - 11 and 10 differ by one bit
// - 10 and 00 differ by one bit
// [0,2,3,1] is also a valid gray code sequence, whose binary representation is [00,10,11,01].
// - 00 and 10 differ by one bit
// - 10 and 11 differ by one bit
// - 11 and 01 differ by one bit
// - 01 and 00 differ by one bit

// Example 2:
// Input: n = 1
// Output: [0,1]

// Returns 4 binary strings per decimalCount.
const _getBinsForDecimals = decimalCount => {
  let bin = [1].concat(new Array(decimalCount - 1).fill(0));
  let arr = [bin.join('')];

  while (arr.length < 4) {
    const idx = bin.findLastIndex(n => n === 0);

    if (idx > 0) {
      bin[idx] = 1;
    } else {
      bin[bin.length-1] = 0;
    }

    arr.push(bin.join(''));
  }

  return arr;
};

// Algo:
// Use 2 arrays. array1 is for the left and to push to, array2 is for the right and unshift into.
// We operatate in pairs, so index 0,1 = array1[00, 10], array2 = [11, 01]
// Then for index 2,3 = array1 = [00, 10, 100, 101], array2 = [111, 110, 11, 01]
// The algo for each index is, even indexes are: 1 followed by the amount of digits per array group:
// Digits per array group are in pairs, 0,1 (2 digits) | 2,3 (3 digits) | 4,5 (4 digits) and onward.
// Binary str to int: parseInt(string, 2);
// Int to bin: intVar.toString(2);

// Thoughts:
// To use less time | space we can:
// 1) Don't store the binary strings, just use them to populate and already created result array.
// 2) Prefill the result array with empty slots. new Array(n * 2).fill(''); (The results will always be double the n arg)
//    Then for the left we add to the first two empty slots, last two empty slots for the right.
//    We fill the array with integers parsed from the binary strings.
// 3) Don't slice or spread anything, these are creating more arrays. Since we know we only have 4 items and we know where
//    they go, just place them by index reference.
// 4) In _getBinsForDecimals, instead of findLastIndex, use a cursor that starts on the last index, flip the index value to 1,
//    and decrement the cursor. Once the cursor hits index 1, we know we need to flip the last index to 0 because everything is then 1's.
//    findLastIndex does another loop and we're already in a nested loop.
const grayCode = (n) => {
  if (n === 1) return [0,1];

  let left = ['00','10'];
  let right = ['11','01'];

  let decimalCount = 3;
  let loop = n - 2;

  while (loop > 0) {
    const bins = _getBinsForDecimals(decimalCount);

    if ((loop - 2) >= 0) {
      left.push(...bins.slice(0, 2));
      right.unshift(...bins.slice(2));
    } else {
      left.push(...[bins[0], bins[2]]);
    }

    loop -= 2;
    decimalCount++;
  }

  // Debug;
  // console.log({left, right});
  return left.concat(right).map(bin => parseInt(bin, 2));
};

export default grayCode;
