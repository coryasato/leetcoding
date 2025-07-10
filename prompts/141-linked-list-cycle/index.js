// 141. Linked List Cycle - https://leetcode.com/problems/linked-list-cycle/

// Given head, the head of a linked list, determine if the linked list has a cycle in it.

// There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

// Return true if there is a cycle in the linked list. Otherwise, return false.

// Example 1:
// Input: head = [3,2,0,-4], pos = 1
// Output: true
// Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).

// Example 2:
// Input: head = [1,2], pos = 0
// Output: true
// Explanation: There is a cycle in the linked list, where the tail connects to the 0th node.

// Example 3:
// Input: head = [1], pos = -1
// Output: false
// Explanation: There is no cycle in the linked list.

import LinkedList from '../../helpers/linked-list';

// Note: The top half of this code is to setup the environment as LeetCode would. That is building a proper LinkedList,
// providing the head node and setting up a cyclical node if the position exists.
const hasCycle = (arr, pos) => {
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
  let res = false;
  clone = head;

  while (clone !== null) {
    seen.add(clone.val);

    if (seen.has(clone.next?.val)) {
      res = true;
      break;
    }

    clone = clone.next;
  }

  return res;
};

export default hasCycle;
