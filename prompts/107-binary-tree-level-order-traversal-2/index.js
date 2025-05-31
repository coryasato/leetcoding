// 107. Binary Tree Level Order Traversal II - https://leetcode.com/problems/binary-tree-level-order-traversal-ii/

// Given the root of a binary tree, return the bottom-up level order traversal of its nodes' values. (i.e., from left to right, level by level from leaf to root).

// Example 1:
// Input: root = [3,9,20,null,null,15,7]
// Output: [[15,7],[9,20],[3]]

// Example 2:
// Input: root = [1]
// Output: [[1]]

// Example 3:
// Input: root = []
// Output: []

import BinaryTree from "../../helpers/binary-tree";

const levelOrderBottom = (arr) => {
  if (arr.length === 0) return [];

  const root = BinaryTree(arr);
  let res = [];

  const walk = (node) => {
    if (node === null) return;

    walk(node.left);
    walk(node.right);

    let entry = [];

    if (node.left !== null) {
      entry.push(node.left.val);
    }
    if (node.right !== null) {
      entry.push(node.right.val);
    }
    if (entry.length > 0) {
      res.push(entry);
    }
  };

  walk(root);
  return res.concat([[root.val]]);
};

export default levelOrderBottom;
