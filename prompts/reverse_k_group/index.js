// 25. Reverse Nodes in k-Group - https://leetcode.com/problems/reverse-nodes-in-k-group/

// Given the head of a linked list, reverse the nodes of the list k at a time, and return the modified list.

// k is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of k then left-out nodes, in the end, should remain as it is.

// You may not alter the values in the list's nodes, only nodes themselves may be changed.

// Example 1:
// Input: head = [1,2,3,4,5], k = 2
// Output: [2,1,4,3,5]

// Example 2:
// Input: head = [1,2,3,4,5], k = 3
// Output: [3,2,1,4,5]

import LinkedList, { ListNode } from "../../helpers/linked_list.js";

// Similar the Brute2, but uses one loop to gather the result values and rebuilds the list linearly.
// https://www.bigocalc.com/ - Time O(n) | Space O(n)
export const reverseKGroupBrute = (arr, k) => {
  let head = LinkedList(arr);

  let bucket = [];
  let sortedHead = ListNode(null);
  let temp = sortedHead;
  let res = [];

  while(head !== null) {
    bucket.push(head);

    if (bucket.length === k) {
      let nullLastNode = false;

      bucket.reverse().forEach((node, i) => {
        res.push(node.val);

        if (node.next === null) {
          nullLastNode = true;
        }
        if (nullLastNode && i === bucket.length-1) {
          node.next = null;
        }
        temp.next = {...node};
        temp = temp.next;
      });
      bucket = [];
    } else if (head.next === null) {
      bucket.forEach((node) => {
        res.push(node.val);

        temp.next = {...node};
        temp = temp.next;
      });
    }

    head = head.next;
  }

  sortedHead = sortedHead.next;
  // console.log(JSON.stringify(sortedHead, null, 2));
  return res;
};

// This strategy will copy all the nodes into a array then reassemble the list, looping through the list twice.
// https://www.bigocalc.com/ - Time O(n) | Space O(n)
const reverseKGroupBrute2 = (arr, k) => {
  let head = LinkedList(arr);

  let bucket = [];
  let nodesArr = [];

  while(head !== null) {
    bucket.push(head);

    if (bucket.length === k) {
      nodesArr.push(...bucket.reverse());
      bucket = [];
    } else if (head.next === null) {
      nodesArr.push(...bucket);
    }

    head = head.next;
  }

  let sortedHead = ListNode(null);
  let res = [];
  nodesArr.reduce((acc, node) => {
    res.push(node.val);

    acc.next = node;
    acc = acc.next
    return acc;
  }, sortedHead);

  sortedHead = sortedHead.next;
  // console.log(JSON.stringify(sortedHead, null, 2));
  return res;
};

const reverseKGroup = () => {

};

export default reverseKGroup;