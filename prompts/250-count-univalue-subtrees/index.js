// 250. Count Univalue Subtrees - https://leetcode.com/problems/count-univalue-subtrees/

// Given a binary tree, count the number of uni-value subtrees.

// A Uni-value subtree means all nodes of the subtree have the same value.

// Example :
// Input:  root = [5,1,5,5,5,null,5]

//               5
//              / \
//             1   5
//            / \   \
//           5   5   5

// Output: 4

// Example 2:
// Input: root = [5,5,5,5,5,null,5]
// Output: 6

// Example 3:
// Input: root = []
// Output: 0

import BinaryTree from "../../helpers/binary-tree";

const countValue = (arr) => {
  const root = BinaryTree(arr);
  let count = 0;

  const walk = (node) => {
    if (node === null) return node;

    const left = walk(node.left);
    const right = walk(node.right);

    if (node.left === null && node.right === null) {
      count++;
    } else if (node.val === left?.val || node.val === right?.val) {
      count++;
    } else {
      count--;
    }

    return node;
  };

  walk(root);
  return count;
};

export default countValue;
