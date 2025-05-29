// 105. Construct Binary Tree from Preorder and Inorder Traversal - https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/

// Given two integer arrays preorder and inorder where preorder is the preorder traversal of a binary tree and inorder is the inorder traversal of the same tree, construct and return the binary tree.

// Example 1:
// Input: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
// Output: [3,9,20,null,null,15,7]

// Example 2:
// Input: preorder = [-1], inorder = [-1]
// Output: [-1]

import { TreeNode, buildArrFromTree } from "../../helpers/binary-tree";

const buildTree = (preorder, inorder) => {
  const rootNode = TreeNode(preorder[0]);

  // We know that the first item in preorder is the rootNode, thus the rootNode in the inorder array will be the pivot.
  // Once we have that index, we can use it to slice the preorder array to split it between left and right trees.
  const idxToSlice = inorder.indexOf(preorder[0]);
  let leftTree = preorder.slice(1, idxToSlice+1);  // Make sure to ignore the rootNode, starting at index 1
  let rightTree = preorder.slice(idxToSlice+1);

  // Seed the rootNodes children, if they exist.
  if (leftTree.length > 0) { rootNode.left = TreeNode(leftTree.shift()); }
  if (rightTree.length > 0) { rootNode.right = TreeNode(rightTree.shift()); }

  // Build the left side of the tree.
  let queue = [rootNode.left];
  while (queue.length > 0) {
    let node = queue.shift();
    const leftNode = leftTree.shift() || null;
    const rightNode = leftTree.shift() || null;

    if (leftNode !== null) {
      node.left = TreeNode(leftNode);
      queue.push(node.left);
    }
    if (rightNode !== null) {
      node.right = TreeNode(rightNode);
      queue.push(node.right);
    }
  }

  // Build the right side of the tree.
  queue = [rootNode.right];
  while (queue.length > 0) {
    let node = queue.shift();
    const leftNode = rightTree.shift() || null;
    const rightNode = rightTree.shift() || null;

    if (leftNode !== null) {
      node.left = TreeNode(leftNode);
      queue.push(node.left);
    }
    if (rightNode !== null) {
      node.right = TreeNode(rightNode);
      queue.push(node.right);
    }
  }

  // Uncomment below to view the tree.
  // console.debug(rootNode);
  return buildArrFromTree(rootNode);
};

export default buildTree;
