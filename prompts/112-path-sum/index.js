// 112. Path Sum - https://leetcode.com/problems/path-sum/

// Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.

// A leaf is a node with no children.

// Example 1:
// Input: root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
// Output: true
// Explanation: The root-to-leaf path with the target sum is shown.

// Example 2:
// Input: root = [1,2,3], targetSum = 5
// Output: false
// Explanation: There are two root-to-leaf paths in the tree:
// (1 --> 2): The sum is 3.
// (1 --> 3): The sum is 4.
// There is no root-to-leaf path with sum = 5.

// Example 3:
// Input: root = [], targetSum = 0
// Output: false
// Explanation: Since the tree is empty, there are no root-to-leaf paths.

import BinaryTree from "../../helpers/binary-tree";

const hasPathSum = (arr, targetSum) => {
  if (arr.length === 0) return false;

  const root = BinaryTree(arr);
  let res = false;

  const walk = (node, sum=0) => {
    if (node === null || res === true) return;
    if (node.left === null && node.right === null) {
      if ((sum + node.val) === targetSum) { res = true; }
      return;
    }

    walk(node.left, (sum + node.val));
    walk(node.right, (sum + node.val));
  };

  walk(root);
  return res;
};

export default hasPathSum;
