// 235. Lowest Common Ancestor of a Binary Search Tree - https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/

// Given a binary search tree (BST), find the lowest common ancestor (LCA) node of two given nodes in the BST.

// According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”

// Example 1:
// Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
// Output: 6
// Explanation: The LCA of nodes 2 and 8 is 6.

// Example 2:
// Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4
// Output: 2
// Explanation: The LCA of nodes 2 and 4 is 2, since a node can be a descendant of itself according to the LCA definition.

// Example 3:
// Input: root = [2,1], p = 2, q = 1
// Output: 2

import BinaryTree from "../../helpers/binary-tree";

const lowestCommonAncestor = (arr, p, q) => {
  const root = BinaryTree(arr);
  let pN = null;
  let qN = null;

  const walk = (node, parentVal=null) => {
    if (node === null) return;
    if (pN !== null && qN !== null) return;

    if (node.val === p) {
      if (parentVal === q && qN !== q) {
        qN = parentVal;
      }
      pN = parentVal || node.val;
    }

    if (node.val === q) {
      if (parentVal === p && pN !== p) {
        pN = parentVal;
      }
      qN = parentVal || node.val;
    }

    walk(node.left, node.val);
    walk(node.right, node.val);
  };

  walk(root);
  if (pN !== qN) { console.warn(`Warning: qN: ${qN} and pN: ${pN} should be the same number!`); }
  return pN;
};

export default lowestCommonAncestor;
