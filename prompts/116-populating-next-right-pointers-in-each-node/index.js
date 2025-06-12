// 116. Populating Next Right Pointers in Each Node - https://leetcode.com/problems/populating-next-right-pointers-in-each-node/

// You are given a perfect binary tree where all leaves are on the same level, and every parent has two children. The binary tree has the following definition:

// struct Node {
//   int val;
//   Node *left;
//   Node *right;
//   Node *next;
// }
// Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL.

// Initially, all next pointers are set to NULL.

// Example 1:
// Input: root = [1,2,3,4,5,6,7]
// Output: [1,#,2,3,#,4,5,6,7,#]
// Explanation: Given the above perfect binary tree (Figure A), your function should populate each next pointer to point to its next right node, just like in Figure B. The serialized output is in level order as connected by the next pointers, with '#' signifying the end of each level.

// Example 2:
// Input: root = []
// Output: []

import { PerfectBinaryTree } from "../../helpers/binary-tree";

const connect = (arr) => {
  if (arr.length === 0) return [];

  const root = PerfectBinaryTree(arr);
  let res = [];
  let queue = [[root]];

  while (queue.length > 0) {
    const level = queue.shift();

    level.forEach((node, i) => {
      const next = level[i+1] || null;
      node.next = next;
      res = next === null ? res.concat([node.val, '#']) : res.concat(node.val);

      if (node.left !== null) {
        queue[0] = queue.length === 0 ? [node.left] : queue[0].concat(node.left);
      }

      if (node.right !== null) {
        queue[0] = queue.length === 0 ? [node.right] : queue[0].concat(node.right);
      }
    });
  }

  return res;
};

export default connect;
