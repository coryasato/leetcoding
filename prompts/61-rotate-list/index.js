// 61. Rotate List - https://leetcode.com/problems/rotate-list/

// Given the head of a linked list, rotate the list to the right by k places.

// Example 1:
// Input: head = [1,2,3,4,5], k = 2
// Output: [4,5,1,2,3]

// Example 2:
// Input: head = [0,1,2], k = 4
// Output: [2,0,1]

import LinkedList, { linkedListToArray } from "../../helpers/linked-list";

const rotateRight = (h, k) => {
  const list = LinkedList(h);
  let head = list;

  while (k > 0) {
    k--;

    let temp = head;

    while(temp.next !== null) {
      temp = temp.next;
      if (temp.next.next === null) break;
    }

    let tail = temp.next;
    temp.next = null;
    tail.next = head;
    head = tail;
  }

  return linkedListToArray(head);
};

export default rotateRight;
