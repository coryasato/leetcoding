// 19. Remove Nth Node From End of List - https://leetcode.com/problems/remove-nth-node-from-end-of-list

// Given the head of a linked list, remove the nth node from the end of the list and return its head.

// Example 1:
// Input: head = [1,2,3,4,5], n = 2
// Output: [1,2,3,5]

// Example 2:
// Input: head = [1], n = 1
// Output: []

// Example 3:
// Input: head = [1,2], n = 1
// Output: [1]

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
const ListNode = (val=0, next=null) => ({
  val,
  next
});

// { val: n, next: { val: n+1, next: {...} } }
const buildLinkedListFromArr = (arr) => {
  if (!arr.length) return null;
  return ListNode(arr[0], buildLinkedListFromArr(arr.slice(1)));
};

// This is a bit arbitrary in JS since we could just .splice the initial head array at the index in a one liner.
// But to follow the rules, we create a linked list of Nodes and iterate over the list of children until we hit a "leaf" node (node without a child).
const removeNthFromEnd = (head, n) => {
  const headNode = buildLinkedListFromArr(head);

  let limit = 0;  // Find the depth of the list
  let node = headNode;  // Mutable iterator. Anything mutated in this object will also mutate the original headNode object
  let res = [];  // Output and used to pluck the target from the index
  let target = 0;  // Node value to skip (we could also use Nth child if values could be repeated, but its similar here given the prompt)

  // First loop is to find our depth boundary.
  // We utilize an array to return the output of the function. Since each node is an incrementing int, we can lazily assume its value is its index minus one.
  // If each Node's value was random, non-incrementing ints that started from 1, then we simply set the target to the value in the array's index instead.
  while (true) {
    res.push(node.val);
    limit++;

    if (node.next === null) {
      target = limit - (n - 1);
      res = res.slice(0, target-1).concat(res.slice(target));  // This is the main output of the fn.
      break;
    } else {
      node = node.next;
    }
  }

  // Reset the mutable pointer to the head node.
  node = headNode;

  // Second loop will mutate the original list, excluding the target Node by value.
  // We already have the output / answer from the first loop, but this one is to, "play by the rules" and return the headNode properly.
  // The limit decrement isn't really needed.
  while (limit > 0) {
    limit--;

    if (node.next === null) break;

    if (node.next.val === target) {
      node.next = node.next.next ? node.next.next : null;
    } else {
      node = node.next;
    }
  }

// The log below is left on purpose to see that the headNode was mutated properly.
// console.log(JSON.stringify(headNode, null, 2));
  return res;
};

export default removeNthFromEnd;
