// 114. Flatten Binary Tree to Linked List - https://leetcode.com/problems/flatten-binary-tree-to-linked-list/

// Given the root of a binary tree, flatten the tree into a "linked list":

// The "linked list" should use the same TreeNode class where the right child pointer points to the next node in the list and the left child pointer is always null.
// The "linked list" should be in the same order as a pre-order traversal of the binary tree.

// Example 1:
// Input: root = [1,2,5,3,4,null,6]
// Output: [1,null,2,null,3,null,4,null,5,null,6]

// Example 2:
// Input: root = []
// Output: []

// Example 3:
// Input: root = [0]
// Output: [0]

import BinaryTree, { TreeNode, buildArrFromTree } from "../../helpers/binary-tree";

const flatten = (arr) => {
  if (arr.length <=1 ) return arr;

  const root = BinaryTree(arr);
  const leftRoot = TreeNode(root.left.val);
  const rightRoot = TreeNode(root.right.val);

  const walk = (node, tree) => {
    if (node === null) return node;

    if (node.left !== null) {
      tree.right = TreeNode(node.left.val);;
      tree = tree.right;
      walk(node.left, tree);
    }

    if (node.right !== null) {
      tree.right = TreeNode(node.right.val);
      tree = tree.right;
      walk(node.right, tree);
    }
  };

  walk(root.left, leftRoot);
  walk(root.right, rightRoot);

  let node = leftRoot;
  while (node !== null) {
    if (node.right === null) {
      node.right = rightRoot;
      break;
    }
    node = node.right;
  }

  root.left = null;
  root.right = leftRoot;
  return buildArrFromTree(root);
};

export default flatten;
