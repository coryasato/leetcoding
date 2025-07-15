// 147. Insertion Sort List - https://leetcode.com/problems/insertion-sort-list/

// Given the head of a singly linked list, sort the list using insertion sort, and return the sorted list's head.

// The steps of the insertion sort algorithm:

// Insertion sort iterates, consuming one input element each repetition and growing a sorted output list.
// At each iteration, insertion sort removes one element from the input data, finds the location it belongs within the sorted list and inserts it there.
// It repeats until no input elements remain.
// The following is a graphical example of the insertion sort algorithm. The partially sorted list (black) initially contains only the first element in the list. One element (red) is removed from the input data and inserted in-place into the sorted list with each iteration.

// Example 1:
// Input: head = [4,2,1,3]
// Output: [1,2,3,4]

// Example 2:
// Input: head = [-1,5,3,4,0]
// Output: [-1,0,3,4,5]

import LinkedList, { linkedListToArray, stringifyList } from "../../helpers/linked-list";

const insertionSortList = (arr) => {
  const mainHead = LinkedList(arr);
  const head = mainHead.next;

  let headNode = mainHead;
  headNode.next = null;

  let clone = head;
  let sortedHead = headNode;

  while (clone !== null) {
    let node = clone;
    clone = clone.next;  // Important to move the iteration forward before we mutate the current node.
    node.next = null;

    if (node.val < sortedHead.val) {
      // If the current node is less than than the current head, then we create a new head.
      const oldHead = sortedHead;
      sortedHead = node;
      sortedHead.next = oldHead;
    } else {
      // Else we iterate through the sorted list to find its placement.
      let sortedClone = sortedHead;

      while (sortedClone !== null) {
        if (sortedClone.next === null) {
          // If next is null, then we're at the end of the list and the current node is the tail.
          sortedClone.next = node;
          break;
        } else if (sortedClone.next?.val > node.val) {
          const nextNode = sortedClone.next;
          sortedClone.next = node;
          node.next = nextNode;
          break;
        }
        // Move forward in the inner while loop.
        sortedClone = sortedClone.next;
      }
    }
    // Outer while loop end.
  }

  // console.log(stringifyList(sortedHead));
  return linkedListToArray(sortedHead);
};

export default insertionSortList;
