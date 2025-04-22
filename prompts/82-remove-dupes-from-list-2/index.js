// 82. Remove Duplicates from Sorted List II - https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/

// Given the head of a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list. Return the linked list sorted as well.

// Example 1:
// Input: head = [1,2,3,3,4,4,5]
// Output: [1,2,5]

// Example 2:
// Input: head = [1,1,1,2,3]
// Output: [2,3]
import LinkedList, { ListNode, linkedListToArray, stringifyList } from '../../helpers/linked-list';

const deleteDuplicates = (arr) => {
  const list = LinkedList(arr);
  const head = ListNode(null, list);
  let prev = head;
  let curr = head.next;

  while (curr !== null) {
    if (curr.val === curr.next?.val) {
      // Find next non-repeated val.
      while (curr.val === curr.next?.val) {
        curr = curr.next;
      }
      curr = curr.next;
      prev.next = curr;
    } else {
      prev = curr;
      curr = curr.next;
    }
  }

  // console.log(stringifyList(head.next));
  return linkedListToArray(head.next);
};

export default deleteDuplicates;
