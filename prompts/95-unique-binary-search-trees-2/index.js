// 95. Unique Binary Search Trees II - https://leetcode.com/problems/unique-binary-search-trees-ii

// Given an integer n, return all the structurally unique BST's (binary search trees), which has exactly n nodes of unique values from 1 to n. Return the answer in any order.

// Example 1:
// Input: n = 3
// Output: [[1,null,2,null,3],[1,null,3,2],[2,1,3],[3,1,null,null,2],[3,2,null,1]]

// Example 2:
// Input: n = 1
// Output: [[1]]

/**
 * Helpers
 */
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

/**
 * Main
 */
const _buildTreeLikeArray = arr => {
  let clone = arr.slice(1);
  let res = [arr[0]];
  let idx = 0;

  while (clone.length > 0) {
    const node = arr[idx];
    const entry = clone.shift();
    idx++;

    let left = null;
    let right = null;

    if (entry > node) {
      right = entry;
    } else {
      left = entry;
    }

    if (clone[0] < node && left === null) {
      left = clone.shift();
      idx++;
    } else if (clone[0] > node && right === null) {
      right = clone.shift();
      idx++;
    }

    // If we're at the end and the right node is null, remove it from the results.
    const nodes = idx >= arr.length-1 && right === null ? [left] : [left, right];
    res = res.concat(nodes);
  }

  return res;
};

const generateTrees = (n) => {
  if (n === 1) return [[1]];

  const srcArr = Array.from(new Array(n), (_, i) => i + 1);
  //  Create all permutations for 1..n
  const permutations = (arr) => {
    if (arr.length === 0) return [[]];

    return arr.flatMap((val, i) => {
      const remaining = arr.slice(0, i).concat(arr.slice(i + 1));
      return permutations(remaining).map(perm => [val, ...perm]);
    });
  };

  const perms = permutations(srcArr);
  const map = {};
  const results = [];

  perms.forEach(perm => {
    const entry = _buildTreeLikeArray(perm);
    const key = entry.join('_');

    if (!(key in map)) {
      map[key] = true;
      results.push(entry);
    }
  });

  // LeetCode asks to return a list of TreeNodes. The log below will print the result to your console.
  // console.table(results.map(r => JSON.stringify(buildTree(r), null, 2)));

  // Returns the basic array-ified tree for simpler tests that match LeetCode's examples "Outputs".
  return results;
};

export default generateTrees;
