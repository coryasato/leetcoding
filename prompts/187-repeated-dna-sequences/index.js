// 187. Repeated DNA Sequences - https://leetcode.com/problems/repeated-dna-sequences/

// The DNA sequence is composed of a series of nucleotides abbreviated as 'A', 'C', 'G', and 'T'.

// For example, "ACGAATTCCG" is a DNA sequence.
// When studying DNA, it is useful to identify repeated sequences within the DNA.

// Given a string s that represents a DNA sequence, return all the 10-letter-long sequences (substrings) that occur more than once in a DNA molecule. You may return the answer in any order.

// Example 1:
// Input: s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"
// Output: ["AAAAACCCCC","CCCCCAAAAA"]

// Example 2:
// Input: s = "AAAAAAAAAAAAA"
// Output: ["AAAAAAAAAA"]

const findRepeatedDnaSequences = (s) => {
  let cache = {};
  let cursor = 0;
  let res = new Set();
  while (cursor < (s.length - 10)) {
    const seq = s.slice(cursor, cursor + 10);

    // Hard check to break loop when letters are exhausted.
    if (seq.length < 10) break;

    if (s.indexOf(seq) > -1) {
      cache[seq] = (cache[seq] || 0) + 1;

      if (cache[seq] > 1 && !res.has(seq)) {
        res.add(seq);
      }
    }

    cursor++;
  }

  return [...res];
};

export default findRepeatedDnaSequences;
