// 23. Merge k Sorted Lists - https://leetcode.com/problems/merge-k-sorted-lists/

// You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

// Merge all the linked-lists into one sorted linked-list and return it.

// Example 1:
// Input: lists = [[1,4,5],[1,3,4],[2,6]]
// Output: [1,1,2,3,4,4,5,6]
// Explanation: The linked-lists are:
// [
//   1->4->5,
//   1->3->4,
//   2->6
// ]
// merging them into one sorted list:
// 1->1->2->3->4->4->5->6

// Example 2:
// Input: lists = []
// Output: []

// Example 3:
// Input: lists = [[]]
// Output: []

import LinkedList, { ListNode } from "../../helpers/linked-list.js";

export const mergeKListsBrute = (listsArr) => {
  if (listsArr.length === 0) return [];

  const lists = listsArr.map(arr => LinkedList(arr));
  let heap = [];

  for (var i = 0; i <= lists.length-1; i++) {
    let node = lists[i];

    while (node !== null) {
      heap.push(node);
      node = node.next;
    }
  }

  let head = ListNode(null);
  let res = [];
  heap
    .sort((n1, n2) => n1.val - n2.val)
    .reduce((acc, n) => {
      res.push(n.val);

      acc.next = n;
      acc = acc.next;
      return acc;
    }, head);
  head = head.next;

  // console.log(JSON.stringify(head, null, 2));
  return res;
};

const _mergeNodes = (n1, n2) => {
  let res = ListNode(null);  // Host node for the new list.
  let curr = res;            // Iterator

  while (n1 !== null || n2 !== null) {
    if (n1 === null) {
      curr.next = n2;
      n2 = n2.next;
    } else if (n2 === null) {
      curr.next = n1;
      n1 = n1.next;
    } else if (n1.val < n2.val) {
      curr.next = n1;
      n1 = n1.next;
    } else {
      curr.next = n2;
      n2 = n2.next;
    }

    curr = curr.next;
  }

  // Throw away the "null" or dummy host node and return the first true node.
  return res.next;
};

const mergeKLists = (listsArr) => {
  if (listsArr.length === 0) return [];
  // By building an array of lists in the fn, it'll slow the overall fn down some. We do it here for ease of testing.
  // If we run a speed test on the fn, remove this and the while loop at the end, then expect the listArr arg to be an array of LinkedLists.
  const lists = listsArr.map(arr => LinkedList(arr));

  const recurse = (arr, start, end) => {
    // When the start and end vars match, we have an entry to return, which will then be merged with its left or right sibling.
    if (start === end) {
      return arr[start];
    }

    // Divide and conquer approach. This will split the arr of lists in half each recursive call until we find a matching ListNode base case.
    const mid = Math.floor((start + end) / 2);

    // [n1, n2, n3, n4] ==> [left: [left: n1, right: n2], right: [left: n3, right: n4]] ==> [left: [SORTED n1 + n2], right: [SORTED n3 + n4]] => [SORTED all nodes]
    let left = recurse(arr, start, mid);
    let right = recurse(arr, mid+1, end);

    return _mergeNodes(left, right);
  };

  const head = recurse(lists, 0, lists.length-1);
  // Everything past this is to return an array of ints. We could also build this array in the sort + merge process.
  // Chose to do it this way to make the above code clearer. This will slow the overall fn down.
  let temp = head;
  let res = [];
  while (temp !== null) {
    res.push(temp.val);
    temp = temp.next;
  }
  // console.log(JSON.stringify(head, null, 2));
  return res;
};

export default mergeKLists;
