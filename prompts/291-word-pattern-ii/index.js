// 291. Word Pattern II - https://leetcode.com/problems/word-pattern-ii/

// Given a pattern and a string str, find if str follows the same pattern.

// Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty substring in str.

// Example 1:
// Input: pattern = "abab", str = "redblueredblue"
// Output: true

// Example 2:
// Input: pattern = pattern = "aaaa", str = "asdasdasdasd"
// Output: true

// Example 3:
// Input: pattern = "aabb", str = "xyzabcxzyabc"
// Output: false

// Notes:
// You may assume both pattern and str contains only lowercase letters.

// NOTE: This passes the above tests, but will not work for more complicated patterns like: "abca", "onetwothreeone".
// To makes this fully complete, we'll need to try all permutations of possible token to word lengths. Since a token can be an arbitrary
// length to begin with, we need to try all possible math lengths for each unique token divided by the length of the string.

// TODO: Revist the the upper logic for mathing out the tokens and words length. Looks messy.
const wordPattern = (pattern, str) => {
  const uniqueTokens = new Set(pattern.split(''));
  const wordsPerTokens = pattern.length / uniqueTokens.size;
  const uniqueWordsPerTokenWords = str.length / wordsPerTokens;
  const avgWordLength = uniqueWordsPerTokenWords / uniqueTokens.size;

  const queue = [];

  if (Number.isInteger(avgWordLength)) {
    queue.push([avgWordLength]);
  } else {
    // WILL NOT WORK FOR MORE THAN 2 pattern tokens
    const low = Math.floor(avgWordLength);
    const high = Math.ceil(avgWordLength);
    // Gather all permutations of the range of possible char count per token
    queue.push([low, high]);
    queue.push([high, low]);
  }

  let res = false;

  while (queue.length) {
    if (res === true) break;

    const wordCountsPerToken = queue.shift();
    const map = new Map();

    let wordCount = wordCountsPerToken.shift();
    let left = 0;
    let right = wordCount;

    for (let i = 0; i < pattern.length; i++) {
      const token = pattern[i];
      const word = str.slice(left, right);

      // Hard break for this entry, mismatch on a token and cursor ranges
      if (map.has(token) && map.get(token) !== word) {
        // console.log('HARD BREAK');
        break;
      }

      // NOTE: Slight possible bug if the word is an empty string given the cursor logic is buggy.
      if (!map.has(token)) {
        map.set(token, word);
      }

      // console.log({token, word, left, right, wordCount});

      // COMPLETE: If we are at the end of the pattern and we have a match, end the main while loop.
      if (i === pattern.length-1 && map.get(token) === word) {
        res = true;
        break;
      }

      // Look ahead to set the next cursor ranges. See if the next token in pattern has already been
      // cached. If it is, then push our cursors forward by the length of the cached word.
      // Otherwise, we haven't seen the token yet, so try the next available wordCountPerToken.
      const nextToken = pattern[i+1];

      if (map.has(nextToken)) {
        wordCount = map.get(nextToken).length;
      } else if (wordCountsPerToken.length > 0) {
        wordCount = wordCountsPerToken.shift();
      }

      left = right;
      right = left + wordCount;
    }
  }

  return res;
};

// console.log(wordPattern('abab', "redblueredblue"));
// console.log(wordPattern('abca', "onetwothreeone"));

export default wordPattern;
