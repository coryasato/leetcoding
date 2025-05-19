// 99. Recover Binary Search Tree - https://leetcode.com/problems/recover-binary-search-tree/

// You are given the root of a binary search tree (BST), where the values of exactly two nodes of the tree were swapped by mistake. Recover the tree without changing its structure.

// Example 1:
// Input: root = [1,3,null,null,2]
// Output: [3,1,null,null,2]
// Explanation: 3 cannot be a left child of 1 because 3 > 1. Swapping 1 and 3 makes the BST valid.

// Example 2:
// Input: root = [3,1,4,null,null,2]
// Output: [2,1,4,null,null,3]
// Explanation: 2 cannot be in the right subtree of 3 because 2 < 3. Swapping 2 and 3 makes the BST valid.

import BinaryTree, { buildArrFromTree } from "../../helpers/binary-tree";

const recoverTree = (arr) => {
  const root = BinaryTree(arr);
  let left = root;
  let right = root;

  const walk = (node, dir) => {
    if (node === null) return;

    if (dir === 'left' && node.val > left.val) {
      const memo = left.val;
      left.val = node.val;
      node.val = memo;
    } else if (dir === 'right' && node.val < right.val) {
      const memo = right.val;
      right.val = node.val;
      node.val = memo;
    }

    walk(node.left, dir);
    walk(node.right, dir);
  }

  walk(root.left, 'left');
  walk(root.right, 'right');
  return buildArrFromTree(root);
};

export default recoverTree;
