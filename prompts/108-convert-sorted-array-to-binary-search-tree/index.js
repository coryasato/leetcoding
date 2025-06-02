// 108. Convert Sorted Array to Binary Search Tree - https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/

// Given an integer array nums where the elements are sorted in ascending order, convert it to a height-balanced binary search tree.

// Example 1:
// Input: nums = [-10,-3,0,5,9]
// Output: [0,-3,9,-10,null,5]
// Explanation: [0,-10,5,null,-3,null,9] is also accepted:

// Example 2:
// Input: nums = [1,3]
// Output: [3,1]
// Explanation: [1,null,3] and [3,1] are both height-balanced BSTs.

import { TreeNode, buildArrFromTree } from "../../helpers/binary-tree";

const sortedArrayToBST = (nums) => {
  const mid = Math.floor(nums.length / 2);
  const root = TreeNode(nums[mid]);
  let left = nums.slice(0, mid);
  let right = nums.slice(mid+1);

  const walk = (node, arr) => {
    if (arr.length === 0 || node === null) return;

    const child = arr.pop();
    if (child < node.val) {
      node.left = TreeNode(child);
      walk(node.left, arr);
    } else {
      node.right = TreeNode(child);
      walk(node.right, arr);
    }
  };

  walk(root, left);
  walk(root, right);
  return buildArrFromTree(root);
};

export default sortedArrayToBST;
