// 100. Same Tree - https://leetcode.com/problems/same-tree/

// Given the roots of two binary trees p and q, write a function to check if they are the same or not.

// Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

// Example 1:
// Input: p = [1,2,3], q = [1,2,3]
// Output: true

// Example 2:
// Input: p = [1,2], q = [1,null,2]
// Output: false

// Example 3:
// Input: p = [1,2,1], q = [1,1,2]
// Output: false

import BinaryTree from "../../helpers/binary-tree";

const isSameTree = (p, q) => {
  const pTree = BinaryTree(p);
  const qTree = BinaryTree(q);
  let isSame = true;

  const walk = (a, b) => {
    if (isSame === false) return;

    if (a === null) {
      if (b !== null) { isSame = false; }
      return;
    }
    if (b === null) {
      if (a !== null) { isSame = false; }
      return;
    }
    if (a.val !== b.val) {
      isSame = false;
      return;
    }

    walk(a.left, b.left);
    walk(a.right, b.right);
  };

  walk(pTree, qTree);
  return isSame;
};

export default isSameTree;
