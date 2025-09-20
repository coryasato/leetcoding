// 208. Implement Trie (Prefix Tree) - https://leetcode.com/problems/implement-trie-prefix-tree

// A trie (pronounced as "try") or prefix tree is a tree data structure used to efficiently store and retrieve keys in a dataset of strings. There are various applications of this data structure, such as autocomplete and spellchecker.

// Implement the Trie class:

// Trie() Initializes the trie object.
// void insert(String word) Inserts the string word into the trie.
// boolean search(String word) Returns true if the string word is in the trie (i.e., was inserted before), and false otherwise.
// boolean startsWith(String prefix) Returns true if there is a previously inserted string word that has the prefix prefix, and false otherwise.


// Example 1:
// Input
// ["Trie", "insert", "search", "search", "startsWith", "insert", "search"]
// [[], ["apple"], ["apple"], ["app"], ["app"], ["app"], ["app"]]
// Output
// [null, null, true, false, true, null, true]

// Explanation
// Trie trie = new Trie();
// trie.insert("apple");
// trie.search("apple");   // return True
// trie.search("app");     // return False
// trie.startsWith("app"); // return True
// trie.insert("app");
// trie.search("app");     // return True

// NOTE: A Trie will have an arbitary number indicating that a node is a full word that was inserted,
// here we're using a boolean to flag it instead to avoid having to create unique numbers per insertion.
const TreeNode = (val, complete=false, next=null) => ({ val, complete, next });

class Trie {
  constructor() {
    this.trie = TreeNode(null);
  }

  insert(word) {
    if (word.length === 0) return;

    let node = this.trie;
    for (var i = 0; i < word.length; i++) {
      const wordSlice = word.slice(0, i+1);

      // Traverse through the tree when the word slices already exist.
      const child = node?.next?.find(n => n.val === wordSlice)
      if (typeof child !== 'undefined') {
        node = child;

        // If we're inserting a word that already has a path (i.e. "apple" exists and we're inserting: "app"),
        // then flip the complete value to true to indicate the word was inserted.
        if (node.val === word && node.complete === false) {
          node.complete = true;
        }

        continue;
      }

      // Creates new branches for unseen word slices.
      if (node.next === null) {
        node.next = [ TreeNode(wordSlice, word === wordSlice) ];
        node = node.next[0];
      } else {
        node.next = node.next.concat(TreeNode(wordSlice, word === wordSlice));
        node = node.next[node.next.length-1];
      }
    }

    return null;
  }

  search(word) {
    if (word.length === 0 || this.trie.next === null) return false;

    let found = false;
    let node = this.trie;

    for (var i = 0; i < word.length; i++) {
      const wordSlice = word.slice(0, i+1);
      const child = node.next?.find(n => n.val === wordSlice);

      if (typeof child !== 'undefined') {
        if (child.val === word && child.complete) {  // Found a matching word and its complete property is truthy
          found = true;
          break;
        } else {                                     // Keep traversing matched child nodes
          node = child;
        }
      } else {                                       // Hard stop, theres nothing left to match
        break;
      }
    }

    return found;
  }

  // NOTE: This could be dry'd up with the search method. We could create a helper method that returns the child node.
  // Then we could simply use the complete property of the node for our logic in both methods.
  startsWith(prefix) {
    if (prefix.length === 0 || this.trie.next === null) return false;

    let found = false;
    let node = this.trie;

    for (var i = 0; i < prefix.length; i++) {
      const prefixSlice = prefix.slice(0, i+1);
      const child = node.next?.find(n => n.val === prefixSlice);

      if (typeof child !== 'undefined') {
        if (child.val === prefix) {  // Found a matching prefix
          found = true;
          break;
        } else {                     // Keep traversing matched child nodes
          node = child;
        }
      } else {                       // Hard stop, theres nothing left to match
        break;
      }
    }

    return found;
  }
};

export default Trie;
