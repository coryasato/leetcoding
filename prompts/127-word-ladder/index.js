// 127. Word Ladder - https://leetcode.com/problems/word-ladder/

// A transformation sequence from word beginWord to word endWord using a dictionary wordList is a sequence of words beginWord -> s1 -> s2 -> ... -> sk such that:

// Every adjacent pair of words differs by a single letter.
// Every si for 1 <= i <= k is in wordList. Note that beginWord does not need to be in wordList.
// sk == endWord
// Given two words, beginWord and endWord, and a dictionary wordList, return the number of words in the shortest transformation sequence from beginWord to endWord, or 0 if no such sequence exists.

// Example 1:
// Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]
// Output: 5
// Explanation: One shortest transformation sequence is "hit" -> "hot" -> "dot" -> "dog" -> cog", which is 5 words long.

// Example 2:
// Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log"]
// Output: 0
// Explanation: The endWord "cog" is not in wordList, therefore there is no valid transformation sequence.

const isMatch = (w1, w2) => {
  let copy = w2;

  for (let i = 0; i < w1.length; i++) {
    if (copy.includes(w1[i])) {
      copy = copy.replace(w1[i], '');
    }
  }

  return copy.length <= 1;
};

// NOTE: Not sure why but the part 2 of this is comes before in prompt 126.
//       Since I solved the harder prompt via a combinatory recursion strategy (which would also work here),
//       I've implemented a more linear approach with a queue.
const ladderLength = (beginWord, endWord, wordList) => {
  let entries = [];
  let len = Number.MAX_VALUE;

  let queue = [{ entry: [beginWord], list: wordList }];
  while (queue.length > 0) {
    const curr = queue.shift();

    curr.list.forEach((word, i) => {
      const lastWord = curr.entry[curr.entry.length-1];

      if (isMatch(lastWord, endWord) && curr.list.indexOf(endWord) > -1) {
        entries.push(curr.entry.concat(endWord));
        len = Math.min(len, curr.entry.length + 1);
      } else if (isMatch(lastWord, word)) {
        queue.push({ entry: curr.entry.concat(word), list: curr.list.slice(i + 1) });
      }
    });
  }

  // NOTE: The entries variable isn't needed at all, I left it here to verify that the word chains are correct.
  // console.log(entries);
  return len === Number.MAX_VALUE ? 0 : len;
};

export default ladderLength;
