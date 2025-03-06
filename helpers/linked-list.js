export const ListNode = (val, next=null) => ({
  val,
  next
});

export const linkedListToArray = (list) => {
  let head = ListNode(null, list);  // Copy the list to avoid mutations to the arg
  let res = [];

  head = head.next;

  while (head !== null) {
    res.push(head.val);
    head = head.next;
  }
  return res;
};

/**
 * @param {arity[]} arr
 * @return {LinkedList}
 */
const LinkedList = (arr) => {
  if (arr.length === 0) return null;
  return ListNode(arr[0], LinkedList(arr.slice(1)));
};

export default LinkedList;
