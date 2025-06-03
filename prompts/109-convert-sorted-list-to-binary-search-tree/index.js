// 109. Convert Sorted List to Binary Search Tree - https://leetcode.com/problems/convert-sorted-list-to-binary-search-tree/

// Given the head of a singly linked list where elements are sorted in ascending order, convert it to a height-balanced binary search tree.

// Example 1:
// Input: head = [-10,-3,0,5,9]
// Output: [0,-3,9,-10,null,5]
// Explanation: One possible answer is [0,-3,9,-10,null,5], which represents the shown height balanced BST.

// Example 2:
// Input: head = []
// Output: []

import LinkedList from "../../helpers/linked-list";
import { TreeNode, buildArrFromTree } from "../../helpers/binary-tree";

const sortedListToBST = (arr) => {
  if (arr.length === 0) return [];

  const listHead = LinkedList(arr);
  const mid = Math.floor(arr.length / 2);
  let childNode = null;
  let root = null;

  const walk = (listNode, idx=0) => {
    // When we hit the end of the list, attach the right tree to the root.
    if (listNode === null) {
      root.right = childNode;
      return;
    };

    const node = TreeNode(listNode.val);
    if (idx === mid) {
      // Assign the root node to its variable and reset the childNode for the right tree.
      node.left = childNode;
      root = node;
      childNode = null;
    } else if (idx <= mid) {
      // Build left tree, bottom up.
      node.left = childNode;
      childNode = node;
    } else {
      // Build right tree, bottom up.
      // If childNode is null, then is doesnt matter what side we assign null.
      if (node.val < childNode?.val) {
        node.right = childNode;
      } else {
        node.left = childNode;
      }
      childNode = node;
    }

    walk(listNode.next, idx+1);
  }

  walk(listHead);
  return buildArrFromTree(root);
};

export default sortedListToBST;
