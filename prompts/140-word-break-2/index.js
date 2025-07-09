// 140. Word Break II - https://leetcode.com/problems/word-break-ii/

// Given a string s and a dictionary of strings wordDict, add spaces in s to construct a sentence where each word is a valid dictionary word. Return all such possible sentences in any order.

// Note that the same word in the dictionary may be reused multiple times in the segmentation.

// Example 1:
// Input: s = "catsanddog", wordDict = ["cat","cats","and","sand","dog"]
// Output: ["cats and dog","cat sand dog"]

// Example 2:
// Input: s = "pineapplepenapple", wordDict = ["apple","pen","applepen","pine","pineapple"]
// Output: ["pine apple pen apple","pineapple pen apple","pine applepen apple"]
// Explanation: Note that you are allowed to reuse a dictionary word.

// Example 3:
// Input: s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
// Output: []

// Second iteration, following the notes below.
// This strategy is much better and easier to reason about.
const __wordBreak = (s, wordDict) => {
  const entries = new Set();
  const queue = [];

  // Seed the queue to get started.
  wordDict.forEach(word => {
    if (s.startsWith(word)) {
      queue.push({ str: s.slice(word.length), words: [word] });
    }
  });

  // For every entry in queue, we add an entry for each matching "branch" where a word can be a potential
  // starting word for the string. If we exhaust all chars in the string, then we have a result.
  while (queue.length > 0) {
    const entry = queue.shift();

    wordDict.forEach(word => {
      if (entry.str.startsWith(word)) {
        if (entry.str.length === word.length) {
          entries.add(entry.words.concat(word).join(' '));
        } else {
          queue.push({ str: entry.str.slice(word.length), words: entry.words.concat(word) });
        }
      }
    });
  }

  return [...entries];
};
// console.log(__wordBreak("catsanddog", ["cat","cats","and","sand","dog"]));
// console.log(__wordBreak("pineapplepenapple", ["apple","pen","applepen","pine","pineapple"]));
// console.log(__wordBreak("catsandog", ["cat","cats","and","sand","dog"]));

// NOTES:
// This is a lot of work going on via gathering the permutations, looping over them with the hacky usedWord re-queue, etc.
// Instead, what if we:
// 1) Loop over the wordDict and for each starting word matched, we add a entry to a stack.
// 2) That entry will look like: { s: stringWithSlicedOffPrevWord, words: [ matched words in order ] } .
// 3) If there are items in the stack, loop again through wordDict for each item continuing the logic.
// 4) If we complete the loop through wordDict and we havent found a match, throw away the entry.
// 5) If we exhaust all chars in s, then we can stop looping for the entry and add the joined "words" array to a results Set.
const wordBreak = (s, wordDict) => {
  const permute = (arr) => {
    if (arr.length <= 1) return [arr];

    const res = [];
    arr.forEach((word, i) => {
      const remaining = arr.slice(0, i).concat(arr.slice(i + 1));
      const perms = permute(remaining);

      for (const perm of perms) {
        res.push([word, ...perm]);
      }
    });
    return res;
  };

  const entriesSet = new Set();

  permute(wordDict).forEach(permutation => {
    const entry = [];
    let str = s.slice();

    for (const word of permutation) {
      let usedWord = false;

      while (str.startsWith(word)) {
        usedWord = true;
        str = str.slice(word.length);
        entry.push(word);
      }
      // If we use a word, append it to the permutation to see if it can be used again.
      if (usedWord) {
        permutation.push(word);
      }
    }
    // If we used up all the letters in the str var, then we have a valid entry. The Set will make sure of uniqueness.
    if (str.length === 0) {
      entriesSet.add(entry.join(' '));
    }
  });

  return [...entriesSet];
};

export default wordBreak;
