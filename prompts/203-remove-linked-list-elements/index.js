// 203. Remove Linked List Elements - https://leetcode.com/problems/remove-linked-list-elements/

// Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.

// Example 1:
// Input: head = [1,2,6,3,4,5,6], val = 6
// Output: [1,2,3,4,5]

// Example 2:
// Input: head = [], val = 1
// Output: []

// Example 3:
// Input: head = [7,7,7,7], val = 7
// Output: []

import LinkedList, { ListNode, linkedListToArray } from "../../helpers/linked-list";

const removeElements = (arr, val) => {
  let head = LinkedList(arr);

  const newHead = ListNode(0);
  let clone = newHead;

  while (head !== null) {
    if (head.val !== val) {
      clone.next = ListNode(head.val);
      clone = clone.next;
    }
    head = head.next;
  }

  return linkedListToArray(newHead.next);
};

export default removeElements;
