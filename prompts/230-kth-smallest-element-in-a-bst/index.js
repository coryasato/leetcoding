// 230. Kth Smallest Element in a BST - https://leetcode.com/problems/kth-smallest-element-in-a-bst/

// Given the root of a binary search tree, and an integer k, return the kth smallest value (1-indexed) of all the values of the nodes in the tree.

// Example 1:
// Input: root = [3,1,4,null,2], k = 1
// Output: 1

// Example 2:
// Input: root = [5,3,6,2,4,null,null,1], k = 3
// Output: 3

import BinaryTree from "../../helpers/binary-tree";

const kthSmallest = (arr, k) => {
  const root = BinaryTree(arr);

  let res = []
  const walk = (node) => {
    if (node === null) return;

    walk(node.left);
    res.push(node.val);
    walk(node.right);
  };

  walk(root);
  return res[k-1];
};

export default kthSmallest;
