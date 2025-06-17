// 124. Binary Tree Maximum Path Sum - https://leetcode.com/problems/binary-tree-maximum-path-sum/

// A path in a binary tree is a sequence of nodes where each pair of adjacent nodes in the sequence has an edge connecting them. A node can only appear in the sequence at most once. Note that the path does not need to pass through the root.

// The path sum of a path is the sum of the node's values in the path.

// Given the root of a binary tree, return the maximum path sum of any non-empty path.

// Example 1:
// Input: root = [1,2,3]
// Output: 6
// Explanation: The optimal path is 2 -> 1 -> 3 with a path sum of 2 + 1 + 3 = 6.

// Example 2:
// Input: root = [-10,9,20,null,null,15,7]
// Output: 42
// Explanation: The optimal path is 15 -> 20 -> 7 with a path sum of 15 + 20 + 7 = 42.

import BinaryTree from "../../helpers/binary-tree";

const maxPathSum = (arr) => {
  const root = BinaryTree(arr);
  let maxSum = 0;

  const walk = (node) => {
    if (node === null) return 0;
    if (node.left === null && node.right === null) {
      return node.val;
    }

    const leftSum = walk(node.left);
    const rightSum = walk(node.right);

    // Allocate sums for subtrees. maxSum here will be each node's left to right full path.
    maxSum = Math.max(maxSum, (leftSum + node.val + rightSum));

    // The below Math.max will select which child's paths sum to the greatest.
    // The return here will essentially tell parent nodes the sum of paths downward, per left and right children.
    return node.val + Math.max(leftSum, rightSum);
  };

  walk(root);
  return maxSum;
};

export default maxPathSum;
