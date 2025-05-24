// 02. Binary Tree Level Order Traversal - https://leetcode.com/problems/binary-tree-level-order-traversal/

// Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

// Example 1:
// Input: root = [3,9,20,null,null,15,7]
// Output: [[3],[9,20],[15,7]]

// Example 2:
// Input: root = [1]
// Output: [[1]]

// Example 3:
// Input: root = []
// Output: []

import BinaryTree from "../../helpers/binary-tree";

const levelOrder = (arr) => {
  const root = BinaryTree(arr);
  let res = [];

  const walk = (node, level=0) => {
    if (node === null) return;

    if (res[level] === undefined) {
      res[level] = [node.val];
    } else {
      res[level].push(node.val);
    }

    walk(node.left, level+1);
    walk(node.right, level+1);
  };

  walk(root);
  return res;
};

export default levelOrder;
