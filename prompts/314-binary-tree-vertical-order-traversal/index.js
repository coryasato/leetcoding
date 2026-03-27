// https://leetcode.com/problems/binary-tree-vertical-order-traversal/

// 314. Binary Tree Vertical Order Traversal

// Description
// Given the root of a binary tree, return the vertical order traversal of its nodes' values. (i.e., from top to bottom, column by column).

// If two nodes are in the same row and column, the order should be from left to right.

// Example 1:
// Input: root = [3,9,20,null,null,15,7]
// Output: [[9],[3,15],[20],[7]]

// Example 2:
// Input: root = [3,9,8,4,0,1,7]
// Output: [[4],[9],[3,0,1],[8],[7]]

// Example 3:
// Input: root = [1,2,3,4,10,9,11,null,5,null,null,null,null,null,null,null,6]
// Output: [[4],[2,5],[1,10,9,6],[3],[11]]

import BinaryTree from "../../helpers/binary-tree";

const verticalOrder = (arr) => {
  const root = BinaryTree(arr);
  let center = [ [0, []] ];
  let left = [];
  let right = [];

  const walk = (node, dir, depth) => {
    if (node === null) return;

    if (dir < 0) {
      const bucketIdx = left.findIndex(bucket => bucket[0] === dir);

      if (bucketIdx > -1) {
        left[bucketIdx][1].push({ dir, depth, val: node.val });
      } else {
        left.unshift([dir, [{ dir, depth, val: node.val }]]);
      }

    } else if (dir > 0) {
      const bucketIdx = right.findIndex(bucket => bucket[0] === dir);

      if (bucketIdx > -1) {
        right[bucketIdx][1].push({ dir, depth, val: node.val });
      } else {
        right.push([dir, [{ dir, depth, val: node.val }]]);
      }

    } else {
      center[0][1].push({ dir, depth, val: node.val });
    }

    walk(node.left, dir-1, depth+1);
    walk(node.right, dir+1, depth+1);
  };

  walk(root, 0, 0);
  return left.concat(center).concat(right).map(([_, list]) => {
    return list
      .sort((a, b) => a.depth - b.depth)
      .map(node => node.val);
  });
};

export default verticalOrder;
