// Builds an array that replicates a binary tree.
// Use BinaryTree fn below to turn this output into a tree.
// Ex: Input: [1,2,3] | Output: [1,null,2,null,3]
export const buildTreeLikeArr = (arr) => {
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

  return treeLikeArr;
};

// Takes in a tree and returns an array like output. This removes the leaf branches nulls.
// Ex. Output: [3,1,null,null,2]
export const buildArrFromTree = (root) => {
  let result = [root.val];
  let queue = [root];

  while (queue.length > 0) {
    const node = queue.shift();

    if (node.left === null) {
      result.push(null);
    } else {
      result.push(node.left.val);
      queue.push(node.left);
    }

    if (node.right === null) {
      result.push(null);
    } else {
      result.push(node.right.val);
      queue.push(node.right);
    }
  }

  // Remove nulls for the leaf branches.
  while (result[result.length-1] === null) {
    result.pop();
  }

  return result;
};

export const TreeNode = (val, left=null, right=null) => ({
  val,
  left,
  right
});

const BinaryTree = (arr) => {
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

export default BinaryTree;
