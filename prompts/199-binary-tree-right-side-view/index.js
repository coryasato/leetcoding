// 199. Binary Tree Right Side View - https://leetcode.com/problems/binary-tree-right-side-view/

// Given the root of a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

// Example 1:
// Input: root = [1,2,3,null,5,null,4]
// Output: [1,3,4]

// Example 2:
// Input: root = [1,2,3,4,null,null,null,5]
// Output: [1,3,4,5]

// Example 3:
// Input: root = [1,null,3]
// Output: [1,3]

// Example 4:
// Input: root = []
// Output: []
import BinaryTree, { TreeNode } from "../../helpers/binary-tree";

const rightSideView = (arr) => {
  if (arr.length === 0) return [];

  const root = BinaryTree(arr);
  const queue = [[root]];
  const res = [];

  while (queue.length > 0) {
    const tierBucket = queue.shift();
    const nextTreeTier = [];
    let rightSideViewValue = null;

    tierBucket.forEach(node => {
      rightSideViewValue = node.val;

      if (node.left) {
        nextTreeTier.push(node.left);
      }
      if (node.right) {
        nextTreeTier.push(node.right);
      }
    });

    if (nextTreeTier.length > 0) {
      queue.push(nextTreeTier);
    }
    if (rightSideViewValue !== null) {
      res.push(rightSideViewValue);
    }
  }

  return res;
};

export default rightSideView;
