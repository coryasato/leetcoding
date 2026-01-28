// 282. Expression Add Operators - https://leetcode.com/problems/expression-add-operators/

// Given a string num that contains only digits and an integer target, return all possibilities to insert the binary operators '+', '-', and/or '*' between the digits of num so that the resultant expression evaluates to the target value.

// Note that operands in the returned expressions should not contain leading zeros.

// Note that a number can contain multiple digits.

// Example 1:
// Input: num = "123", target = 6
// Output: ["1*2*3","1+2+3"]
// Explanation: Both "1*2*3" and "1+2+3" evaluate to 6.

// Example 2:
// Input: num = "232", target = 8
// Output: ["2*3+2","2+3*2"]
// Explanation: Both "2*3+2" and "2+3*2" evaluate to 8.

// Example 3:
// Input: num = "3456237490", target = 9191
// Output: []
// Explanation: There are no expressions that can be created from "3456237490" to evaluate to 9191.

// NOTE: I'm leaving the sum property in the entry on purpose to show that in sequence, on the fly calculations
// will not work for this approach. "232" => "2+3*2" will equal 10 if calculated from left to right. However eval will
// return 8.
const _buildEntry = (entry, operator, currNum) => {
  switch(operator) {
    case '+':
      return { index: entry.index+1, label: `${entry.label}+${currNum}`, sum: (entry.sum + currNum) };
    case '*':
      return { index: entry.index+1, label: `${entry.label}*${currNum}`, sum: (entry.sum * currNum) };
    case '-':
      return { index: entry.index+1, label: `${entry.label}-${currNum < 0 ? "(" + currNum + ")" : currNum}`, sum: (entry.sum - currNum) };
    default:
      return { ...entry, index: entry.index+1 };
  }
};

// NOTE: Negative nums are not currently accounted for. We will need to look for NaNs in the num string and group
// them with the following number, then caste that string into a Number.
const addOperators = (num, target) => {
  if (num.length <= 1) return Number(num) === target ? [num] : [];

  const nums = num.split('').map(s => Number(s));
  const res = [];

  let queue = [{ index: 1, label: `${nums[0]}`, sum: nums[0] }];

  while (queue.length > 0) {
    const entry = queue.shift();

    // End of input, see if the sum is equal to the target.
    if (entry.index > nums.length-1) {
      // NOTE: Using eval here to make things easier. Since we're building from left to right, the sum sequentially
      // will not work since calculations occur right to left. We could reverse the nums array or use depth first
      // recursion to avoid using eval here and calculate on the fly.
      if (eval(entry.label) === target) {
        res.push(entry.label);
      }
      continue;
    }

    const currNum = nums[entry.index];
    // For each entry we create a new branch for each operator.
    queue.push(_buildEntry(entry, '+', currNum));
    queue.push(_buildEntry(entry, '-', currNum));
    queue.push(_buildEntry(entry, '*', currNum));
  }

  return res;
};

export default addOperators;
