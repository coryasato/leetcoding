// 96. Unique Binary Search Trees - https://leetcode.com/problems/unique-binary-search-trees/

// Given an integer n, return the number of structurally unique BST's (binary search trees) which has exactly n nodes of unique values from 1 to n.

// Example 1:
// Input: n = 3
// Output: 5

// Example 2:
// Input: n = 1
// Output: 1

const _buildTreeLikeArr = (arr) => {
  let clone = arr.slice();
  let queue = [clone.shift()];
  let treeLikeArr = queue.slice();

  while (clone.length > 0) {
    const root = queue.shift();
    const child = clone.shift();

    if (child < root) {
      treeLikeArr.push(child);
      queue.push(child);
      // Check if we can fit a right node on the current tier.
      if (clone[0] > root) {
        const rightChild = clone.shift();
        treeLikeArr.push(rightChild);
        queue.push(rightChild);
      }

    } else {
      // Check if we can fit a left node on the current tier.
      if (clone[0] < root) {
        const leftChild = clone.shift();
        treeLikeArr = treeLikeArr.concat([leftChild, child]);
        queue = queue.concat([leftChild, child])
      } else {
        treeLikeArr = treeLikeArr.concat([null, child]);
        queue.push(child);
      }

    }
  }

  return {
    arr: treeLikeArr,
    key: treeLikeArr.join('_'),
  };
};

const numTrees = (n) => {
  const srcArr = Array.from(new Array(n), (_, i) => i + 1);

  const permute = (arr) => {
    if (arr.length === 0) return [arr];

    return arr.flatMap((val, i) => {
      const remainder = arr.slice(0, i).concat(arr.slice(i+1));
      return permute(remainder).map(perm => [val, ...perm]);
    });
  };

  const map = permute(srcArr).reduce((acc, perm) => {
    const { arr, key } = _buildTreeLikeArr(perm);
    acc[key] = arr;
    return acc;
  }, {});

  return Object.keys(map).length;
};

export default numTrees;
