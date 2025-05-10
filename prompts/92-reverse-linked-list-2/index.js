// 92. Reverse Linked List II - https://leetcode.com/problems/reverse-linked-list-ii/

// Given the head of a singly linked list and two integers left and right where left <= right, reverse the nodes of the list from position left to position right, and return the reversed list.

// Example 1:
// Input: head = [1,2,3,4,5], left = 2, right = 4
// Output: [1,4,3,2,5]

// Example 2:
// Input: head = [5], left = 1, right = 1
// Output: [5]

import LinkedList, { ListNode, linkedListToArray, stringifyList } from "../../helpers/linked-list";

const reverseBetween = (arr, left, right) => {
  const head = LinkedList(arr);
  const clone = ListNode(null, head);

  let node = clone;
  let leftNodeParent = null;
  let rightNodeParent = null;

  while(node !== null) {
    if (node.next?.val === left) {
      leftNodeParent = node;
    }

    if (node.next?.val === right) {
      rightNodeParent = node;

      let leftNode = leftNodeParent.next;
      let rightNode = rightNodeParent.next;
      let leftNodeNext = leftNode.next;
      let rightNodeNext = rightNode.next;

      // Swap time!
      rightNode.next = null;
      leftNodeParent.next = rightNode;

      leftNode.next = null;
      rightNodeParent.next = leftNode;

      rightNode.next = leftNodeNext;
      leftNode.next = rightNodeNext;

      // We're done, break the loop.
      break;
    }

    node = node.next;
  }

  // console.log(stringifyList(clone));
  return linkedListToArray(clone.next);
};

export default reverseBetween;
