// 110. Balanced Binary Tree - https://leetcode.com/problems/balanced-binary-tree/

// Given a binary tree, determine if it is height-balanced.

// Example 1:
// Input: root = [3,9,20,null,null,15,7]
// Output: true

// Example 2:
// Input: root = [1,2,2,3,3,null,null,4,4]
// Output: false

// Example 3:
// Input: root = []
// Output: true

import BinaryTree from "../../helpers/binary-tree";

const isBalanced = (arr) => {
  if (arr.length === 0) return true;

  const root = BinaryTree(arr);
  const walk = (node, depth=1) => {
    if (node === null) return depth;

    const dL = walk(node.left, depth+1);
    const dR = walk(node.right, depth+1);

    return Math.max(dL, dR);
  };

  return Math.abs(walk(root.left) - walk(root.right)) <= 1;
};

console.log(isBalanced([3,9,20,null,null,15,7]));
console.log(isBalanced([1,2,2,3,3,null,null,4,4]));

export default isBalanced;
