// 244: Find Shortest Word Distance II - https://leetcode.com/problems/shortest-word-distance-ii/

// Design a data structure that will be initialized with a string array, and then it should answer queries of the shortest distance between two different strings from the array.

// Implement the WordDistance class:

// WordDistance(String[] wordsDict): constructor to initialize the object with the strings array wordsDict.
// int shortest(String word1, String word2): returns the shortest distance between word1 and word2 in the array wordsDict.

// Example 1:
// Input:
// ["WordDistance", "shortest", "shortest"]
// [[["hello", "geek", "gfg", "coding", "geek"]], ["coding", "hello"], ["geek", "coding"]]
// Output
// [null, 3, 1]
// Explanation:
// The first query calls the constructor and initializes word dictionary with words: ["hello", "geek", "gfg", "coding", "geek"], therefore returns null.
// wordDistance.shortest("coding", "hello") finds the minimum distance between "coding" and "hello", that is 3 - 0 = 3
// wordDistance.shortest("geek", "coding") finds the minimum distance between "coding" and "geek", that is 4 - 3 = 1

// Example 2:
// Input:
// ["WordDistance", "shortest", "shortest"]
// [[["abc", "def", "ghi", "abc"]], ["abc", "ghi"], ["abc", "def"]]
// Output:
// [null, 1, 1]
// Explanation:
// The first query calls the constructor and initializes word dictionary with words: ["abc", "def", "ghi", "abc"], therefore returns null.
// wordDistance.shortest("abc", "ghi") finds the minimum distance between "abc" and "ghi", that is 3 - 2 = 1
// wordDistance.shortest("abc", "def") finds the minimum distance between "abc" and "def", that is 1 - 0 = 1

// NOTE: Memoizing the word arguments speeds things up for duplicate requests, however, we can do
// better by memoizing indexes for each word. We can setup the indexes on instantiation or be lazy and
// do it on the first call to the "shortest" method. We do a full sweep of the wordsDict array only once. On
// subsequest calls, we utilize the indexMap for comparison. Then we memoize that result into wordsToPathMap for
// a true O(1) lookup for duplicate requests.
class WordDistance {
  #wordsToPathMap;

  constructor(wordsDict) {
    this.wordsDict = wordsDict;

    // Private fields
    this.#wordsToPathMap = new Map();
  }

  shortest(word1, word2) {
    const key = this.#getWordsKey(word1, word2);

    if (this.#wordsToPathMap.has(key)) return this.#wordsToPathMap.get(key);

    return this.#getShortestPath(word1, word2);
  }

  // Private Methods
  #getShortestPath(word1, word2) {
    let res = Number.MAX_SAFE_INTEGER;
    let w1Idx = -1;
    let w2Idx = -1;

    this.wordsDict.forEach((word, i) => {
      if (word === word1) {
        if (w2Idx >= 0) {
          res = Math.min(Math.abs(w2Idx - i), res);
        }
        w1Idx = i;
      } else if (word === word2) {
        if (w1Idx >= 0) {
          res = Math.min(Math.abs(w1Idx - i), res);
        }
        w2Idx = i;
      }
    });

    this.#wordsToPathMap.set(this.#getWordsKey(word1, word2), res);
    return res;
  }

  #getWordsKey(a, b) {
    return `${a}-${b}`;
  }
};

export default WordDistance;
