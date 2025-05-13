// 94. Binary Tree Inorder Traversal - https://leetcode.com/problems/binary-tree-inorder-traversal/

// Given the root of a binary tree, return the inorder traversal of its nodes' values.

// Example 1:
// Input: root = [1,null,2,3]
// Output: [1,3,2]
// Explanation:

// Example 2:
// Input: root = [1,2,3,4,5,null,8,null,null,6,7,9]
// Output: [4,2,6,5,7,1,3,9,8]
// Explanation:

// Example 3:
// Input: root = []
// Output: []

// Example 4:
// Input: root = [1]
// Output: [1]

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

const inorderTraversal = (arr) => {
  const root = buildTree(arr);

  let result = [];
  const walk = (node) => {
    if (node === null) return;

    walk(node.left);
    result.push(node.val);
    walk(node.right);
  };

  walk(root);
  return result;
};

export default inorderTraversal;
