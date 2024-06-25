// https://leetcode.com/problems/add-two-numbers/
// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. 
// Add the two numbers and return the sum as a linked list.
// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Example 1:
// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.
// Example 2:

// Input: l1 = [0], l2 = [0]
// Output: [0]
// Example 3:

// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]

// This ignores the LinkedList prompt and simply tries an O(n) approach to the prompt via JS arrays.
// If each integer was a node instead, we can simply use node.val for access and push the "remainder" to node.next to increment its value.
// Then we wouldn't need the remainder variable, but would need to create a new node when the iteration is complete and we have a "remainder" left over (1 in case of a 10 value).
const addTwoNumbers = (l1, l2) => {
  let arr = [];
  let remainder = 0;
  
  const listToIter = l1.length > l2.length ? l1 : l2;
  
  for (let i = 0; i <= listToIter.length-1; i++) {
    const a = l1[i];
    const b = l2[i];
    const result = (a||0) + (b||0) + remainder;
    
    if (result > 9) {
      remainder = 1;
      arr.push(result % 10);
    } else {
      remainder = 0;
      arr.push(result);
    }
  }
  
  if (remainder === 1) {
    arr.push(1);
  }
  
  return arr;
};

console.log(addTwoNumbers([2,4,3], [5,6,4]));
console.log(addTwoNumbers([9,9,9,9,9,9,9], [9,9,9,9]));
console.log(addTwoNumbers([0], [0]));