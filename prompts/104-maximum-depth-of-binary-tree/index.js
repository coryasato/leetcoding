// 104. Maximum Depth of Binary Tree - https://leetcode.com/problems/maximum-depth-of-binary-tree/

// Given the root of a binary tree, return its maximum depth.

// A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

// Example 1:
// Input: root = [3,9,20,null,null,15,7]
// Output: 3

// Example 2:
// Input: root = [1,null,2]
// Output: 2

import BinaryTree from "../../helpers/binary-tree";

const maxDepth = (arr) => {
  const root = BinaryTree(arr);
  let depth = 1;

  const walk = (node, d=1) => {
    if (node === null) return;
    if (d > depth) {
      depth = d;
    }
    walk(node.left, d+1);
    walk(node.right, d+1);
  };

  walk(root);
  return depth;
};

export default maxDepth;
