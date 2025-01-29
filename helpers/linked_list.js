export const ListNode = (val, next) => ({
  val,
  next
});

/**
 * @param {arity[]} arr
 * @return {LinkedList}
 */
const LinkedList = (arr) => {
  if (arr.length === 0) return null;
  return ListNode(arr[0], LinkedList(arr.slice(1)));
};

export default LinkedList;
