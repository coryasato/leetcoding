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

import LinkedList, { ListNode } from "../../helpers/linked_list.js";

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
