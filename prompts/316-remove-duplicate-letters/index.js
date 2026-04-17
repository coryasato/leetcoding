// 316. Remove Duplicate Letters - https://leetcode.com/problems/remove-duplicate-letters/

// Given a string s, remove duplicate letters so that every letter appears once and only once. You must make sure your result is the smallest in lexicographical order among all possible results.

// Example 1:
// Input: s = "bcabc"
// Output: "abc"

// Example 2:
// Input: s = "cbacdcbc"
// Output: "acdb"

// NOTE: Quick and brute solution.
const _removeDuplicateLetters = s => {
  let lowestCharCode = Number.MAX_SAFE_INTEGER;
  let lowestIdx = Number.MAX_SAFE_INTEGER;

  s.split('').forEach((letter, i) => {
    const n = letter.charCodeAt();

    if (n < lowestCharCode) {
      lowestCharCode = n;
      lowestIdx = i;
    }
  });

  const set = new Set();

  s.slice(lowestIdx).split('').forEach(letter => {
    set.add(letter);
  });

  return [...set].join('');
};

// NOTE: Sequentially creates "branches" per letter. Similar to recusively creating stacks of potential results, but linear.
// The inner loop per letter is slow.
const removeDuplicateLetters = s => {
  const uniqueLetters = new Set();

  let entries = [];
  for (let i = 0; i < s.length; i++) {
    const letter = s[i];
    uniqueLetters.add(letter);

    entries.forEach(entry => entry.add(letter));
    entries.push(new Set([letter]));
  }

  let result = entries[0];
  entries.forEach(entry => {
    if (entry.size === uniqueLetters.size &&
        entry.values().next().value.charCodeAt() < result.values().next().value.charCodeAt())
    {
      result = entry;
    }
  });

  return [...result].join('');
};

export default removeDuplicateLetters;
