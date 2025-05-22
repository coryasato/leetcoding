// 101. Symmetric Tree - https://leetcode.com/problems/symmetric-tree/

// Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

// Example 1:
// Input: root = [1,2,2,3,4,4,3]
// Output: true

// Example 2:
// Input: root = [1,2,2,null,3,null,3]
// Output: false

import BinaryTree from "../../helpers/binary-tree";

const isSymmetric = (arr) => {
  const root = BinaryTree(arr);
  // Return early if the first two child nodes do not match.
  // We are going to start the recursion with both as root nodes.
  if (root.left?.val !== root.right?.val) return false;

  let res = true;
  const walk = (t1, t2) => {
    if (res === false) return;
    if (t1 === null && t2 === null) return;

    if (t1?.left?.val !== t2?.right?.val) {
      res = false;
      return;
    }

    walk(t1.left, t2.right);
    walk(t1.right, t2.left);
  };

  walk(root.left, root.right);
  return res;
};

export default isSymmetric;
