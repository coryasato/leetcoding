// 143. Reorder List - https://leetcode.com/problems/reorder-list/

// You are given the head of a singly linked-list. The list can be represented as:

// L0 → L1 → … → Ln - 1 → Ln
// Reorder the list to be on the following form:

// L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
// You may not modify the values in the list's nodes. Only nodes themselves may be changed.

// Example 1:
// Input: head = [1,2,3,4]
// Output: [1,4,2,3]

// Example 2:
// Input: head = [1,2,3,4,5]
// Output: [1,5,2,4,3]

import LinkedList, { linkedListToArray, stringifyList } from "../../helpers/linked-list";

const redorderList = (arr) => {
  const head = LinkedList(arr);
  let clone = head;

  // The queue is a backwards list of nodes (deepest first). We don't know the depth of the list until we walk it.
  // This will allow us to know where to split the list it the middle and alternate between the first
  // and second halfs when rebuilding the LinkedList. We only store references to avoid recreating objects.
  const queue = [];
  while (clone !== null) {
    queue.unshift(clone);
    clone = clone.next;
  }

  const mid = Math.ceil(queue.length / 2);
  const firstHalf = queue.slice(mid, -1);  // Remove the head node (last element)
  const lastHalf = queue.slice(0, mid);

  clone = head;
  while (lastHalf.length > 0 || firstHalf.length > 0) {
    const a = lastHalf.shift() || null;
    const b = firstHalf.pop() || null;

    clone.next = a;
    clone = clone.next;
    clone.next = b;
    if (b !== null) {
      clone = clone.next;
    }
  }

  // console.log(stringifyList(head));
  return linkedListToArray(head);
};

export default redorderList;
