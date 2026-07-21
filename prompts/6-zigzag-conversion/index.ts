// https://leetcode.com/problems/zigzag-conversion/description/
// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

// P   A   H   N
// A P L S I I G
// Y   I   R
// And then read line by line: "PAHNAPLSIIGYIR"

// Write the code that will take a string and make this conversion given a number of rows:

// string convert(string s, int numRows);

// Example 1:
// Input: s = "PAYPALISHIRING", numRows = 3
// Output: "PAHNAPLSIIGYIR"

// Example 2:
// Input: s = "PAYPALISHIRING", numRows = 4
// Output: "PINALSIGYAHRPI"
// Explanation:
// P     I    N
// A   L S  I G
// Y A   H R
// P     I

// Example 3:
// Input: s = "A", numRows = 1
// Output: "A"

// NOTE: This vastly improves the previous strategy, but I think we can do better here. See if we can remove the need for the inner loops.
const convert = (s: string, numRows: number) => {
  const zigZagStepNm = Math.floor(numRows / 2);  // This represents how many letters to traverse diagonally upwards, from left to right.
  let bucket: string[] = Array.from(Array(numRows), () => '');

  let i = 0;
  let turn = 0;

  while (i < s.length) {
    // We will chunk turns for each move as follows:
    // 1. Turn 0: Slice all vertical letters and set them in their specific rows.
    // 2  Turn 1: Slice all the diagonal inner letters and set them in the specific rows.
    // Repeat until we're exhausted.
    if (turn === 0) {
      const slice = s.slice(i, i + numRows);

      for (let j = 0; j < slice.length; j++) {
        bucket[j] += slice[j]!;
      }

      i += numRows;
      turn = 1;
    } else {
      const slice = s.slice(i, i + zigZagStepNm);
      let idx = 0;

      // This is kind of weird, but we want to start at the second to last row in the bucket, which will get the first
      // letter in the slice as we move upwards. We want to skip the last and first rows as turn 0 sets all vertical inlines in one chunk.
      for (let j = bucket.length-2; j > 0; j--) {
        bucket[j] += slice[idx]!
        idx++;
      }

      i += zigZagStepNm;
      turn = 0;
    }
  }

  return bucket.join('');
};

export default convert;
