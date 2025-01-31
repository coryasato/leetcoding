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

// Recursive attempt. The space is still O(n) here and its basically a similar approach to the brute force fns. Trying for O(1) space.
// The code is forced to be linearly iterative due to the linked list.
export const reverseKGroupRecursive = (arr, k) => {
  let head = LinkedList(arr);

  let host = ListNode(null);
  let temp = host;
  let res = [];

  const recurse = (node, arr=[]) => {
    if (node === null) return node;

    arr.push(node);

    if (arr.length === k || node.next === null) {
      const nodes = (arr.length === k) ? arr.reverse() : arr;

      res = res.concat(nodes.map(n => n.val));
      temp.next = sortNodes(nodes);
      arr = [];

      while (node.next !== null && temp.next !== null) {
        temp = temp.next;
      }
    }

    recurse(node.next, arr);
    return node;
  };

  recurse(head);
//   console.log('TTT', JSON.stringify(host.next, null, 2));
  return res;
};

// Time: O(N) | Space: O(1)
// Pointers, pointers, pointers!
const reverseKGroup = (arr, k) => {
  let head = LinkedList(arr);
  let host = ListNode(null);
  host.next = head;

  let prev = host;
  let curr = null;
  let next = null;

  let count = 0;
  while (head !== null) {
    count++;
    head = head.next;
  }

  while (count >= k) {
    curr = prev.next;  // First node of group
    next = curr.next;  // Second node of group

    for (let i = 1; i < k; i++) {
      curr.next = next.next;
      next.next = prev.next;
      prev.next = next;
      next = curr.next;
    }
    prev = curr;
    count -= k;
  }

  // Dig to up all the values into an array.
  let res = [];
  curr = host.next;
  while (curr !== null) {
    res.push(curr.val);
    curr = curr.next;
  }
//   console.log(JSON.stringify(host.next, null, 2));
  return res;
};

export default reverseKGroup;
