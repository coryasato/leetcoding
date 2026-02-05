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
const _wordPattern = (pattern, str) => {
  const uniqueTokens = new Set(pattern.split(''));
  const wordsPerTokens = Math.floor(pattern.length / uniqueTokens.size);
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
    const perms = getPermutationsForArr([low, high]);
    queue.push(...perms);
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

const wordPattern = (pattern, str) => {
  // Loop over pattern to find duplicate tokens
  // > Use a Map to hold duplicate token to str patterns when a match is found, then look for this first. This will handle 3 and onward tokens. <
  // The first token takes the first letter in str, if subsequent tokens do not match, move the token's cursor forward by each token.
  // Each unique token takes up minimum of 1 char in str.
  // When we find a duplicate pattern, we want to move both cursors forward, greedy match as far as we can to assign the string to the token.
  // Once matched, remove both duplicate tokens from pattern and slice out the string ranges from str.
  // The main loop is done once pattern is exhausted / empty.

  // We're only interested in processing duplicate indexes first. As non duplicate indexes are arbitary strings.

  let duplicateTokenIdxs = [];

  for (let i = 0; i < pattern.length; i++) {
    const char = pattern[i];

    const rest = pattern.slice(i+1);
    if (rest.includes(char)) {
      duplicateTokenIdxs.push({ token: char, posX: [i, pattern.split('').findIndex((c, idx) => idx !== i && c === char)] });
      break;
    }
  }

  // If there are no duplicate tokens, then any token can be any string as long as one char in str can be assigned to one token, minimum.
  if (duplicateTokenIdxs.length === 0) return [pattern, str];
  // If there are no duplicate tokens, then any token can be any string as long as one char in str can be assigned to one token, minimum.
  //if (duplicateTokenIdxs.length === 0) return pattern.length <= str.length;

  let map = new Map();
  console.log({duplicateTokenIdxs, pattern, str});
  // Process duplicates first
  while (duplicateTokenIdxs.length > 0) {
    const { token, posX } = duplicateTokenIdxs.shift();

    const cursorAStart = posX[0];
    const charA = str.slice(cursorAStart, cursorAStart + 1);

    let cursorBStart = -1;
    let cursorRange = 1;
    let entries = [];

    // Make sure to account for 1 char in str per token index. So we start the i variable past any non-dupe token.
    const start = cursorAStart + 1;
    const end = str.length - ((pattern.length-1) - posX[1]);
    console.log({t: 'BEFORE LOOP', end, start, what: (pattern.length - posX[1])});
    for (let i = start; i <= end; i++) {
      if (cursorBStart < 0 && str[i] === charA) {
        cursorBStart = i;
        continue;
      } else if (cursorBStart > 0) {
        // From here on we have the first matching dupe, lets greedy match as far as we can.
        cursorRange++;
        const strA = str.slice(cursorAStart, cursorAStart + cursorRange);
        const strB = str.slice(cursorBStart, i+1);

        console.log({strA, strB, cursorRange, i, t: str.length - end});

        const isAtEnd = i === (end-1);
        if (strA !== strB || isAtEnd) {
          const entry = isAtEnd
            ? { str: strA, cursorBStart, cursorRange }
            : { str: strA.slice(0, -1), cursorBStart, cursorRange: cursorRange-1 };
          // console.log({t: 'DUMP', entry});

          if (entries.length === 0) {
            entries.push(entry);
          } else if (entries.length > 0 && entries[0].cursorRange < entry.cursorRange) {
            entries = [entry];
          }

          // Reset vars
          i = cursorBStart;
          cursorBStart = -1;
          cursorRange = 1;
        }
      }
    }

    const bestEntry = entries[0];

    if (bestEntry) {
      console.log({bestEntry, posX});
      str = str.slice(0, bestEntry.cursorBStart) + str.slice(bestEntry.cursorBStart + bestEntry.cursorRange);
      // console.log({t: 1, str});
      str = str.slice(0, cursorAStart) + str.slice(cursorAStart + bestEntry.cursorRange);
      pattern = pattern.slice(0, posX[1]) + pattern.slice(posX[1]+1);
      pattern = pattern.slice(0, posX[0]) + pattern.slice(posX[0]+1);
      console.log({t: 2, str, pattern});
      map.set(token, bestEntry.str);
    } else {
      return [null, null];
    }
  }
  const tester = wordPattern(pattern, str);

  console.log({t: 'DONE', pattern, str, tester});
  return [pattern, str];
};

// console.log(wordPattern('abab', "redblueredblue"));
console.log(wordPattern('azbab', "redcblueredblue"));
// console.log(wordPattern('abca', "onetwothreeone"));

export default wordPattern;
