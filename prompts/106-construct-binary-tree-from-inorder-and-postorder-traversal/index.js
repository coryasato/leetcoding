// 106. Construct Binary Tree from Inorder and Postorder Traversal - https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/

// Given two integer arrays inorder and postorder where inorder is the inorder traversal of a binary tree and postorder is the postorder traversal of the same tree, construct and return the binary tree.

// Example 1:
// Input: inorder = [9,3,15,20,7], postorder = [9,15,7,20,3]
// Output: [3,9,20,null,null,15,7]

// Example 2:
// Input: inorder = [-1], postorder = [-1]
// Output: [-1]

import { TreeNode, buildArrFromTree } from "../../helpers/binary-tree";

const buildTree = (inorder, postorder) => {
  const walk = (pArr, iArr) => {
    if (iArr.length === 0) return null;
    if (iArr.length === 1) {
      return TreeNode(iArr[0]);
    }

    const parentNode = TreeNode(pArr.pop());
    const pivotIdx = iArr.findIndex(idx => idx === parentNode.val);

    const leftTree = iArr.slice(0, pivotIdx);
    const rightTree = iArr.slice(pivotIdx+1);

    parentNode.left = walk(pArr.slice(0, leftTree.length), leftTree);
    parentNode.right = walk(pArr.slice(leftTree.length+1), rightTree);

    return parentNode;
  };

  return buildArrFromTree(walk(postorder, inorder));
};

export default buildTree;
