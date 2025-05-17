// 98. Validate Binary Search Tree - https://leetcode.com/problems/validate-binary-search-tree/

// Given the root of a binary tree, determine if it is a valid binary search tree (BST).

// A valid BST is defined as follows:

// The left subtree of a node contains only nodes with keys less than the node's key.
// The right subtree of a node contains only nodes with keys greater than the node's key.
// Both the left and right subtrees must also be binary search trees.

// Example 1:
// Input: root = [2,1,3]
// Output: true

// Example 2:
// Input: root = [5,1,4,null,null,3,6]
// Output: false
// Explanation: The root node's value is 5 but its right child's value is 4.

const TreeNode = (val, left=null, right=null) => ({
  val,
  left,
  right
});

const buildTree = (arr) => {
  if (!arr || arr.length === 0) {
    return null;
  }

  const root = TreeNode(arr[0]);
  let queue = [root];
  let i = 1;

  while (i < arr.length) {
    const current = queue.shift();

    if (arr[i] !== null && i < arr.length) {
      current.left = TreeNode(arr[i]);
      queue.push(current.left);
      i++;
    } else {
      i++;
    }

    if (arr[i] !== null && i < arr.length) {
      current.right = TreeNode(arr[i]);
      queue.push(current.right);
      i++;
    } else {
      i++;
    }
  }

  return root;
};

const isValidBST = (arr) => {
  const root = buildTree(arr);
  let result = true;

  const walk = (node, parentVal) => {
    if (node === null) return;
    if (result === false) return;

    if ((node.left?.val > parentVal) || (node.right?.val < parentVal)) {
      result = false;
    }

    walk(node.left, node.val);
    walk(node.right, node.val);
  };

  walk(root, root.val);
  return result;
};

export default isValidBST;
