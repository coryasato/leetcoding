// 21. Merge Two Sorted Lists - https://leetcode.com/problems/merge-two-sorted-lists/

// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.

// Example 1:
// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]

// Example 2:
// Input: list1 = [], list2 = []
// Output: []

// Example 3:
// Input: list1 = [], list2 = [0]
// Output: [0]

const Node = (val, next=null) => ({
  val,
  next
});

const buildList = (arr) => {
  if (arr.length === 0) return null;
  return Node(arr[0], buildList(arr.slice(1)));
};

// NOTE:
// 1. This is really ugly, heavily conditional code. There should be ways to clean it up.
// 2. The prompt says to splice the together the nodes of the lists, however I'm spreading the results into a new list to reduce mutations. Not sure if thats correct.
const mergeTwoLists = (arr1, arr2) => {
  const list1 = buildList(arr1);
  const list2 = buildList(arr2);

  let res = [];

  const walk = (node, node2, head=null) => {
    if (node === null || node2 === null) {
      if (node ===  null && node2 !== null) {
        if (head !== null) {
          head.next = {...node2};
        } else {
          head = {...node2}
        }
        res = res.concat(node2.val);
        walk(node, node2.next, head.next);
      } else if (node !== null && node2 === null) {
        if (head !== null) {
          head.next = {...node};
        } else {
          head = {...node}
        }
        res = res.concat(node.val);
        walk(node.next, node2, head.next);
      }

      return null;
    }

    res = node.val <= node2.val
      ? res.concat([node.val, node2.val])
      : res.concat([node2.val, node.val]);

    if (head === null) {
      if (node.val <= node2.val) {
        head = {...node};
        head.next = {...node2};
      } else {
        head = {...node2};
        head.next = {...node};
      }
    } else if (node.val <= node2.val) {
      head.next = {...node};
      head.next.next = {...node2};
      head = head.next;
    } else if (node.val > node2.val) {
      head.next = {...node2};
      head.next.next = {...node};
      head = head.next;
    }

    walk(node.next, node2.next, head.next);
    return head;
  };

  const mergedList = walk(list1, list2);
  // console.log(JSON.stringify(mergedList, null, 2));
  return res;
};

export default mergeTwoLists;
