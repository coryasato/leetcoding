// 138. Copy List with Random Pointer - https://leetcode.com/problems/copy-list-with-random-pointer/

// A linked list of length n is given such that each node contains an additional random pointer, which could point to any node in the list, or null.

// Construct a deep copy of the list. The deep copy should consist of exactly n brand new nodes, where each new node has its value set to the value of its corresponding original node. Both the next and random pointer of the new nodes should point to new nodes in the copied list such that the pointers in the original list and copied list represent the same list state. None of the pointers in the new list should point to nodes in the original list.

// For example, if there are two nodes X and Y in the original list, where X.random --> Y, then for the corresponding two nodes x and y in the copied list, x.random --> y.

// Return the head of the copied linked list.

// The linked list is represented in the input/output as a list of n nodes. Each node is represented as a pair of [val, random_index] where:

// val: an integer representing Node.val
// random_index: the index of the node (range from 0 to n-1) that the random pointer points to, or null if it does not point to any node.
// Your code will only be given the head of the original linked list.

// Example 1:
// Input: head = [[7,null],[13,0],[11,4],[10,2],[1,0]]
// Output: [[7,null],[13,0],[11,4],[10,2],[1,0]]

// Example 2:
// Input: head = [[1,1],[2,1]]
// Output: [[1,1],[2,1]]

// Example 3:
// Input: head = [[3,null],[3,0],[3,null]]
// Output: [[3,null],[3,0],[3,null]]

const _Node = (val, random=null, next=null) => ({
  val,
  next,
  random,
});
// NOTE: This list will not contain the correct pointers to the random node, it will host the indexes to them.
const _LinkedList = (arr) => {
  if (arr.length === 0) return null;
  return _Node(arr[0][0], arr[0][1], _LinkedList(arr.slice(1)));
};

const copyRandomList = (arr) => {
  const head = _LinkedList(arr);
  const copyH = _Node(-1);
  const orderedNodes = [];

  let headRef = head;
  while (headRef !== null) {
    orderedNodes.push(headRef);
    headRef = headRef.next;
  }

  headRef = head;
  let copyRef = copyH;
  while (headRef !== null) {
    let randomNode = headRef.random === null ? null : {...orderedNodes[headRef.random]};

    copyRef.next = _Node(headRef.val, randomNode, headRef.next);
    copyRef = copyRef.next;
    headRef = headRef.next;
  }

  const res = [];
  copyRef = copyH.next;
  while (copyRef !== null) {
    const random = copyRef.random === null ? null : orderedNodes.findIndex((node, i) => node.val === copyRef.random.val);
    res.push([copyRef.val, random]);
    copyRef = copyRef.next;
  }

  // console.log(JSON.stringify(copyH.next, null, 2));
  return res;
};

export default copyRandomList;
