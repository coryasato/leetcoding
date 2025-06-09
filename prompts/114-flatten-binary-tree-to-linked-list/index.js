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
  if (arr.length === 0) return arr;

  const root = BinaryTree(arr);
  const head = TreeNode(0);
  let list = head;

  const walk = (node) => {
    if (node === null) return;

    list.right = TreeNode(node.val);
    list = list.right;
    walk(node.left);
    walk(node.right);
  };

  walk(root.left);
  walk(root.right);

  root.left = null;
  root.right = head.right;
  return buildArrFromTree(root);
};

export default flatten;
