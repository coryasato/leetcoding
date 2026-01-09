// 257. Binary Tree Paths - https://leetcode.com/problems/binary-tree-paths/

// Given the root of a binary tree, return all root-to-leaf paths in any order.

// A leaf is a node with no children.

// Example 1:
// Input: root = [1,2,3,null,5]
// Output: ["1->2->5","1->3"]

// Example 2:
// Input: root = [1]
// Output: ["1"]

import BinaryTree from "../../helpers/binary-tree";

const binaryTreePaths = (arr) => {
  const root = BinaryTree(arr);
  const res = [];

  const walk = (node, path=[]) => {
    if (node === null) return;

    if (node.left === null && node.right === null) {
      res.push(path.concat(node.val).join('->'));
      return;
    }

    // Avoid any mutations to the path array.
    path = path.concat(node.val);

    walk(node.left, path);
    walk(node.right, path);
  };

  walk(root);
  return res;
};

export default binaryTreePaths;
