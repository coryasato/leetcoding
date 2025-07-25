// 142. Linked List Cycle II - https://leetcode.com/problems/linked-list-cycle-ii/

// Given the head of a linked list, return the node where the cycle begins. If there is no cycle, return null.

// There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to (0-indexed). It is -1 if there is no cycle. Note that pos is not passed as a parameter.

// Do not modify the linked list.

// Example 1:
// Input: head = [3,2,0,-4], pos = 1
// Output: tail connects to node index 1
// Explanation: There is a cycle in the linked list, where tail connects to the second node.

// Example 2:
// Input: head = [1,2], pos = 0
// Output: tail connects to node index 0
// Explanation: There is a cycle in the linked list, where tail connects to the first node.

// Example 3:
// Input: head = [1], pos = -1
// Output: no cycle
// Explanation: There is no cycle in the linked list.

import LinkedList from "../../helpers/linked-list";

const detectCycle = (arr, pos) => {
  /** Start Setup */
  const head = LinkedList(arr);
  let clone = head;
  let posVal = arr[pos];
  let posNode = null;

  while(clone !== null) {
    if (clone.val === posVal) {
      posNode = clone;
    }
    if (clone.next === null && posNode !== null) {
      clone.next = posNode;
      break;
    }
    clone = clone.next;
  }
  /** End Setup */

  const seen = new Set();
  let res = null;
  clone = head;

  while (clone !== null) {
    seen.add(clone.val);

    if (seen.has(clone.next?.val)) {
      res = clone.next;
      break;
    }

    clone = clone.next;
  }

  // NOTE: Returning the val here instead of the node to make testing easier. Uncomment below to log the node.
  // console.log(res);
  return res?.val || null;
};

export default detectCycle;
