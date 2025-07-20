// 148. Sort List - https://leetcode.com/problems/sort-list/

// Given the head of a linked list, return the list after sorting it in ascending order.

// Example 1:
// Input: head = [4,2,1,3]
// Output: [1,2,3,4]

// Example 2:
// Input: head = [-1,5,3,4,0]
// Output: [-1,0,3,4,5]

// Example 3:
// Input: head = []
// Output: []

import LinkedList, { linkedListToArray, stringifyList } from "../../helpers/linked-list";

const sortList = (arr) => {
  if (arr.length === 0) return arr;

  let head = LinkedList(arr);
  let node = head.next;
  let prevNode = head;

  // Conditionals:
  // 1) If the current node is less than the current head, we create a new head with the node. prevNode stays still since
  //    the next iteration will be the current node's "next".
  // 2) If the current node is less than the prevNode, then we do a full iteration through the list starting at the second
  //    node. Once we find a position, we swap it out and utilize the outer loop's prevNode and point it to the current node's
  //    "next", memoized. Essentially patching the hole / putting the chain back together while avoiding circular references.
  // 3) Nothing to do, move the iteration forward.
  while (node !== null) {
    if (node.val < head.val) {
      const nodeNextMemo = node.next;
      const oldHead = head;

      node.next = null;
      prevNode.next = nodeNextMemo;
      head = node;
      head.next = oldHead;

      node = nodeNextMemo;
    } else if (node.val < prevNode.val) {
      let curr = head.next;
      let prev = head;

      while (curr !== null) {
        if (node.val < curr.val) {
          const nodeNextMemo = node.next;
          node.next = null;

          prev.next = node;
          node.next = curr;
          prevNode.next = nodeNextMemo;

          node = nodeNextMemo;
          break;
        } else {
          prev = curr;
          curr = curr.next;
        }
      }
    } else {
      prevNode = node;
      node = node.next;
    }
  }

  // console.log(stringifyList(head));
  return linkedListToArray(head);
};

export default sortList;
