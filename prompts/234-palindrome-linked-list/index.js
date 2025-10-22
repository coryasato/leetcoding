// 234. Palindrome Linked List - https://leetcode.com/problems/palindrome-linked-list/

// Given the head of a singly linked list, return true if it is a palindrome or false otherwise.

// Example 1:
// Input: head = [1,2,2,1]
// Output: true

// Example 2:
// Input: head = [1,2]
// Output: false

import LinkedList from "../../helpers/linked-list";

// Follow up: Could you do it in O(n) time and O(1) space?

// NOTE: The space constraint forces us to loop through for each node in the first half of the list.
// Since this is a singly linked list, we don't have a way to iterate backwards nor store any additional
// data structures because of the space constraint. Only counters, pointers and basic variables allowed.
const isPalindrome = (arr) => {
  const root = LinkedList(arr);
  let curr = root;
  let depth = 0;

  // Find the depth of list, we will use it as our tail integer pointer.
  while (curr !== null) {
    depth++;
    curr = curr.next;
  }

  let head = root;
  let headIdx = 0;
  let tailIdx = depth-1;
  let res = true;

  curr = root;
  depth = 0;

  while (headIdx < tailIdx) {
    if (depth === tailIdx) {
      if (head.val !== curr.val) {
        res = false;
        break;
      } else {
        // Reset the loop and move the head forward and tail backward.
        head = head.next;
        curr = head;
        headIdx++;
        tailIdx--;
        depth = headIdx;
      }
    } else {
      depth++;
      curr = curr.next;
    }
  }

  return res;
};

export default isPalindrome;
