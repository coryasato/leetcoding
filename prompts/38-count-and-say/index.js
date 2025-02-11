// 38. Count and Say - https://leetcode.com/problems/count-and-say/

// The count-and-say sequence is a sequence of digit strings defined by the recursive formula:

// countAndSay(1) = "1"
// countAndSay(n) is the run-length encoding of countAndSay(n - 1).
// Run-length encoding (RLE) is a string compression method that works by replacing consecutive identical characters (repeated 2 or more times) with the concatenation of the character and the number marking the count of the characters (length of the run). For example, to compress the string "3322251" we replace "33" with "23", replace "222" with "32", replace "5" with "15" and replace "1" with "11". Thus the compressed string becomes "23321511".

// Given a positive integer n, return the nth element of the count-and-say sequence.

// Example 1:
// Input: n = 4
// Output: "1211"
// Explanation:
// countAndSay(1) = "1"
// countAndSay(2) = RLE of "1" = "11"
// countAndSay(3) = RLE of "11" = "21"
// countAndSay(4) = RLE of "21" = "1211"

// Example 2:
// Input: n = 1
// Output: "1"
// Explanation:
// This is the base case.

// Follow up: Could you solve it iteratively?

const countAndSay = (int) => {
  let acc = '1';  // Pre-seed a count to skip the loop if its not needed.

  // Start the loop and int-1 due to the pre-seed.
  // Each while loop will overwrite the accumulator to its RLE value.
  while ((int-1) > 0) {
    let full = '';
    let temp = '';

    for (let i = 0; i < acc.length; i++) {
      const num = acc[i];
      // If the current num is repeating from the last, store it in the temp string for later processing.
      // Otherwise set the temp to the current num.
      if (temp[i-1] === num) {
        temp = temp.concat(num);
      } else {
        // If we have past repeating nums in temp, apply the RLE algo to nums and add it to the full variable.
        // This needs to be done before resetting the temp variable.
        if (temp.length > 0) {
          full = full.concat(`${temp.length}${temp[0]}`);
        }
        temp = num;
      }

      // If we're at the end of the loop, we'll either have nums in the temp var to append, or if none, append the current num to its RLE value.
      if (i === acc.length-1) {
        if (temp.length > 0) {
          full = full.concat(`${temp.length}${temp[0]}`);
        } else {
          full = full.concat(`1${num}`);
        }
      }
    }

    acc = full;
    int--;
  }

  return acc;
};

export default countAndSay;
