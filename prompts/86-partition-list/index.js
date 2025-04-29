// 86. Partition List -mhttps://leetcode.com/problems/partition-list

// Given the head of a linked list and a value x, partition it such that all nodes less than x come before nodes greater than or equal to x.

// You should preserve the original relative order of the nodes in each of the two partitions.

// Example 1:
// Input: head = [1,4,3,2,5,2], x = 3
// Output: [1,2,2,4,3,5]

// Example 2:
// Input: head = [2,1], x = 2
// Output: [1,2]

import LinkedList, {ListNode, linkedListToArray, stringifyList} from "../../helpers/linked-list";{}

const partition = (arr, x) => {
  const head = LinkedList(arr);
  const clone = ListNode(null, head);

  let node = clone.next;
  let root = clone;

  let cacheHead = ListNode(null, null);
  let cache = cacheHead;

  while (node !== null) {
    if (node.val >= x) {
      // Point the current root's next to skip over the current node.
      root.next = node.next;
      // Cache the current node and null out its next. Move the cache forward to the node.
      cache.next = node;
      cache = cache.next;
      cache.next = null;
      // Set the current node to the root node, the next loop will start on it's next.
      node = root;
    } else {
      // When the current node is less than the target, move the root forward.
      root = root.next;
    }
    // When we hit the end of the list, append the cached list.
    if (node.next === null) {
      node.next = cacheHead.next;
      break;
    }

    node = node.next;
  }

  // console.log(stringifyList(clone));
  return linkedListToArray(clone.next);
};

export default partition;
