// 103. Binary Tree Zigzag Level Order Traversal - https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/

// Given the root of a binary tree, return the zigzag level order traversal of its nodes' values. (i.e., from left to right, then right to left for the next level and alternate between).

// Example 1:
// Input: root = [3,9,20,null,null,15,7]
// Output: [[3],[20,9],[15,7]]

// Example 2:
// Input: root = [1]
// Output: [[1]]

// Example 3:
// Input: root = []
// Output: []

import BinaryTree from "../../helpers/binary-tree";

const zigzagLevelOrder = (arr) => {
  const root = BinaryTree(arr);
  let res = [];

  const walk = (node, level=0, lToR=true) => {
    if (node === null) return;

    if (res[level] === undefined) {
      res[level] = [node.val];
    } else if (lToR === true) {
      res[level].push(node.val);
    } else {
      res[level].unshift(node.val);
    }

    walk(node.left, level + 1, !lToR);
    walk(node.right, level + 1, !lToR);
  };

  walk(root);
  return res;
};

export default zigzagLevelOrder;
