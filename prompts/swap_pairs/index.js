// 24. Swap Nodes in Pairs - https://leetcode.com/problems/swap-nodes-in-pairs/

// Example 1:
// Input: head = [1,2,3,4]
// Output: [2,1,4,3]
// Explanation:

// Example 2:
// Input: head = []
// Output: []

// Example 3:
// Input: head = [1]
// Output: [1]

// Example 4:
// Input: head = [1,2,3]
// Output: [2,1,3]

import LinkedList, { ListNode } from "../../helpers/linked-list.js";

export const swapPairsRecursive = (arr) => {
  if (arr.length === 0) return arr;

  let head = LinkedList(arr);
  let res = [];

  const recurse = (node, depth=1) => {
    if (node === null) return node;

    if (depth % 2 !== 0) {       // If depth is even, process the current and next nodes.
      if (node.next !== null) {  // This condition is stricly for the res array. If we didn't need to allot the vals, then we could remove it.
        let a = node;
        let b = node.next;
        const nextMemo = b.next;   // Memoize the chain going forward (curentNode.next.next). Its going to be a node or null.

        node = b;
        node.next = a;
        a.next = nextMemo;       // Assign the rest of the chain to the next node.

        res = res.concat(node.val, node.next.val);
      } else {
        res = res.concat(node.val);
      }
    }

    node.next = recurse(node.next, depth+1);
    return node;
  };

  const list = recurse(head);
  // console.log(JSON.stringify(list, null, 2));
  return res;
};

const swapPairs = (arr) => {
  if (arr.length === 0) return arr;

  let head = LinkedList(arr);
  let node = ListNode(null);
  let res = [];
  let temp = node;

  while (head !== null) {
    let left = head;
    let right = head.next;

    if (right !== null) {
      res = res.concat([right.val, left.val]);

      temp.next = {...right};
      temp = temp.next;
      temp.next = {...left};
      temp = temp.next;
      head = head.next.next;
    } else {
      res = res.concat(left.val);

      temp.next = {...left};
      temp = temp.next;
      head = head.next;
    }

    if (head === null) {
      temp.next = null;
    }
  }

  node = node.next;
  // console.log(JSON.stringify(node, null, 2));
  return res;
};

export default swapPairs;
