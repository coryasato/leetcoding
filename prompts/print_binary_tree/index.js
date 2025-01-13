/**
 * Prompt: Given a binary tree, print each level of nodes on their respective lines.
 *
 * This is something I saw on X as a common tech interview question and figured I would test myself on it.
*/

const Node = ({value, left=null, right=null}) => ({
  value: value,
  left,
  right
});

const tree = {
  root: new Node({
    value: 1,
    left: new Node({
      value: 10,
      left: new Node({
        value: 21,
        left: new Node({ value: 31 })
      }),
      right: new Node({
        value: 22,
        right: new Node({ value: 34 })
      })
    }),
    right: new Node({
      value: 15,
      left: new Node({
        value: 23,
        left: new Node({ value: 35 }),
        right: new Node({ value: 36 })
      }),
      right: new Node({ value: 24 })
    })
  })
};

// This fn will build an array of arrays that will make printing the end outcome easier. We require some sort of structure to pass through
// the stacks as we traverse the tree. Much easier than building out with a string through the traversal process, which will require REGEXs, loops or
// other slowish processes.
const buildTreeMap = (node, level=0, arr=[]) => {
  // Seed nested array, make sure it exists!
  if (!Array.isArray(arr[level])) {
    arr[level] = [];
  }
  // This is to place "empty" values for null children ("pockets").  This way we can see if our traversal is working as intended.
  // The downside here is that we'll get an ending row of zeroes for each node without children.
  // If we don't want this behavior, we can simply raise the base case to the first line of the function, removing the "pockets".
  if (node === null) {
    arr[level].push(0);
    return arr;  // Recursive base case
  }

  // Push the current node value to its respective level.
  arr[level].push(node.value);

  // Traverse left to right. Left nodes get placed first in their arrays, followed by the right nodes.
  // The "arr" param is being mutated via the push method, so we don't need to capture the returned value in the recursive calls.
  buildTreeMap(node.left, level+1, arr);
  buildTreeMap(node.right, level+1, arr);

  return arr;
};

const printTreeMap = () => {
  const res = buildTreeMap(tree.root).reduce((acc, levelArr) => {
    if (levelArr.every(n => n === 0)) return acc;  // Remove the last row of empty children nodes.
    return acc += levelArr.join(', ').concat('\n');  // Join each row, appending a line break
  }, '\n');

  console.log(res);
  return res;
};

export default printTreeMap;

// The result will be:
// "
// 1
// 10, 15
// 21, 22, 23, 24
// 31, 0, 0, 34, 35, 36, 0, 0
// "
