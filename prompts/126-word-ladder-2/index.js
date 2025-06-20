// 126. Word Ladder II - https://leetcode.com/problems/word-ladder-ii/

// A transformation sequence from word beginWord to word endWord using a dictionary wordList is a sequence of words beginWord -> s1 -> s2 -> ... -> sk such that:

// Every adjacent pair of words differs by a single letter.
// Every si for 1 <= i <= k is in wordList. Note that beginWord does not need to be in wordList.
// sk == endWord
// Given two words, beginWord and endWord, and a dictionary wordList, return all the shortest transformation sequences from beginWord to endWord, or an empty list if no such sequence exists. Each sequence should be returned as a list of the words [beginWord, s1, s2, ..., sk].

// Example 1:
// Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]
// Output: [["hit","hot","dot","dog","cog"],["hit","hot","lot","log","cog"]]
// Explanation: There are 2 shortest transformation sequences:
// "hit" -> "hot" -> "dot" -> "dog" -> "cog"
// "hit" -> "hot" -> "lot" -> "log" -> "cog"

// Example 2:
// Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log"]
// Output: []
// Explanation: The endWord "cog" is not in wordList, therefore there is no valid transformation sequence.

// A match is valid if the two word differ by one letter.
const isMatch = (w1, w2) => {
  let copy = w2;

  for (let i = 0; i < w1.length; i++) {
    if (copy.includes(w1[i])) {
      copy = copy.replace(w1[i], '');
    }
  }

  return copy.length <= 1;
};

const findLadders = (beginWord, endWord, wordList) => {
  let entries = [];
  let len = Number.MAX_VALUE;

  const combo = (entry, list) => {
    if (list.length === 0) return;
    // If the last item in entry can match the endWord and the endWord exists in list,
    // then append it to the entry and return.
    if (isMatch(entry[entry.length-1], endWord) && (list.indexOf(endWord) > -1)) {
      entry = entry.concat(endWord);

      if (entry.length < len) {
        entries = [entry];
      } else if (entry.length === len) {
        entries.push(entry);
      }

      len = Math.min(len, entry.length);
      return;
    }

    list.forEach((item, i) => {
      if (isMatch(entry[entry.length-1], item)) {
        entry.push(item);
        combo(entry, list.slice(i+1));
        entry.pop();
      }
    });
  };

  combo([beginWord], wordList.slice());
  return entries;
};

export default findLadders;
