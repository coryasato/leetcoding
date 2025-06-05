// 111. Minimum Depth of Binary Tree - https://leetcode.com/problems/minimum-depth-of-binary-tree/

// Given a binary tree, find its minimum depth.

// The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

// Note: A leaf is a node with no children.

// Example 1:
// Input: root = [3,9,20,null,null,15,7]
// Output: 2

// Example 2:
// Input: root = [2,null,3,null,4,null,5,null,6]
// Output: 5

import BinaryTree from "../../helpers/binary-tree";

const minDepth = (arr) => {
  if (arr.length === 0) return 0;

  const root = BinaryTree(arr);
  let res = Infinity;

  const walk = (node, depth=1) => {
    if (node === null) return;
    if (node.left === null && node.right === null) {
      res = Math.min(res, depth);
      return;
    }

    walk(node.left, depth+1);
    walk(node.right, depth+1);
  }

  walk(root);
  return res;
};

export default minDepth;
