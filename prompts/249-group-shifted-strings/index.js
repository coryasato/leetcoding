// 249. Group Shifted Strings - https://leetcode.com/problems/group-shifted-strings/

// Given a string, we can "shift" each of its letter to its successive letter, for example: "abc" -> "bcd". We can keep "shifting" which forms the sequence:

// "abc" -> "bcd" -> ... -> "xyz"
// Given a list of strings which contains only lowercase alphabets, group all strings that belong to the same shifting sequence.

// Example:
// Input: ["abc", "bcd", "acef", "xyz", "az", "ba", "a", "z"],
// Output:
// [
//   ["abc","bcd","xyz"],
//   ["az","ba"],
//   ["acef"],
//   ["a","z"]
// ]

const ALPHA_MAP = new Map('abcdefghijklmnopqrstuvwxyz'.split('').map((letter, i) => [letter, i+1]));

// NOTE: Builds out groups of [string length + deltas of indexes] between characters in a string to determine a pattern of shifted letters.
// That way we can create a compound index with that data and look if any other strings apply the same pattern.
// 1) We could drop the str.length in the index name, its not really needed.
// 2) The pattern var could be another data type to use less memory and avoid the .join call.
const groupStrings = (arr) => {
  const groups = {};

  arr.forEach(str => {
    let pattern = [];
    let prev = ALPHA_MAP.get(str[0]);

    for (let i = 1; i < str.length; i++) {
      const char = str[i];
      const idx = ALPHA_MAP.get(char);
      const delta = idx < prev ? ((idx + 26) - prev) : (idx - prev);  // If we need to circle around from b to a (for instance), add a full 26 round trip

      pattern.push(delta);
      prev = idx;
    }

    const comboKey = `${str.length}-${pattern.join('|')}`;
    groups[comboKey] = (groups[comboKey] || []).concat(str);
  });

  return Object.values(groups);
};

export default groupStrings;
