// 318. Maximum Product of Word Lengths - https://leetcode.com/problems/maximum-product-of-word-lengths/

// Given a string array words, return the maximum value of length(word[i]) * length(word[j]) where the two words do not share common letters. If no such two words exist, return 0.

// Example 1:

// Input: words = ["abcw","baz","foo","bar","xtfn","abcdef"]
// Output: 16
// Explanation: The two words can be "abcw", "xtfn".

// Example 2:
// Input: words = ["a","ab","abc","d","cd","bcd","abcd"]
// Output: 4
// Explanation: The two words can be "ab", "cd".

// Example 3:
// Input: words = ["a","aa","aaa","aaaa"]
// Output: 0
// Explanation: No such pair of words.

// Brute solution
const maxProduct = words => {
  const wordSets = words.map(w => new Set(w.split('')));

  let product = 0;

  for (let i = 0; i < wordSets.length; i++) {
    const curr = wordSets[i];

    for (let j = i+1; j < wordSets.length; j++) {
      const next = wordSets[j];

      if (curr.intersection(next).size === 0) {
        product = Math.max(product, (curr.size * next.size));
      }
    }
  }

  return product;
};

export default maxProduct;
