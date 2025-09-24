// 211. Design Add and Search Words Data Structure - https://leetcode.com/problems/design-add-and-search-words-data-structure/

// Design a data structure that supports adding new words and finding if a string matches any previously added string.

// Implement the WordDictionary class:

// WordDictionary() Initializes the object.
// void addWord(word) Adds word to the data structure, it can be matched later.
// bool search(word) Returns true if there is any string in the data structure that matches word or false otherwise. word may contain dots '.' where dots can be matched with any letter.

// Example:
// Input
// ["WordDictionary","addWord","addWord","addWord","search","search","search","search"]
// [[],["bad"],["dad"],["mad"],["pad"],["bad"],[".ad"],["b.."]]
// Output
// [null,null,null,null,false,true,true,true]

// Explanation
// WordDictionary wordDictionary = new WordDictionary();
// wordDictionary.addWord("bad");
// wordDictionary.addWord("dad");
// wordDictionary.addWord("mad");
// wordDictionary.search("pad"); // return False
// wordDictionary.search("bad"); // return True
// wordDictionary.search(".ad"); // return True
// wordDictionary.search("b.."); // return True

// NOTE: This is a brute solution that would be very inefficient. The search is O(n2) since we're looping via .filter per letter.
// 1) A better solution is a tree graph where each letter is node.
// A node knows when its a complete word by issuing it a flag like an integer (commonly done) or in case
// of leetcode, a boolean would work. Then .search would simply travel down the tree nodes and attempt to find a node with that flag.
//
// 2) Another solution would be using a dynamic RegExp built on the word argument of .search, then store every added word in a large string,
// space divided and match against that. RegExs are also slow but likely faster than the O(n2) solution.
class WordDictionary {
  constructor() {
    this.store = [];
  }

  addWord(word) {
    if (!this.store.includes(word)) {
      this.store.push(word);
    }
    return null;
  }

  search(word) {
    let initMatches = this.store.filter(w => word[0] === '.' || w.startsWith(word[0]));

    for (let i = 1; i < word.length; i++) {
      const letter = word[i];

      if (initMatches.length === 0) break;
      if (letter === '.') continue;

      initMatches = initMatches.filter(word => word[i] === letter);
    }

    return initMatches.length > 0;
  }
};

export default WordDictionary;
