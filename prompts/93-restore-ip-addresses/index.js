// 93. Restore IP Addresses - https://leetcode.com/problems/restore-ip-addresses/

// A valid IP address consists of exactly four integers separated by single dots. Each integer is between 0 and 255 (inclusive) and cannot have leading zeros.

// For example, "0.1.2.201" and "192.168.1.1" are valid IP addresses, but "0.011.255.245", "192.168.1.312" and "192.168@1.1" are invalid IP addresses.
// Given a string s containing only digits, return all possible valid IP addresses that can be formed by inserting dots into s. You are not allowed to reorder or remove any digits in s. You may return the valid IP addresses in any order.

// Example 1:
// Input: s = "25525511135"
// Output: ["255.255.11.135","255.255.111.35"]

// Example 2:
// Input: s = "0000"
// Output: ["0.0.0.0"]

// Example 3:
// Input: s = "101023"
// Output: ["1.0.10.23","1.0.102.3","10.1.0.23","10.10.2.3","101.0.2.3"]

const _isSubstrValid = (substr) => {
  if (substr.length > 3 || substr.length === 0) return false;
  if (substr.length > 1 && substr[0] === '0') return false;
  return parseInt(substr, 10) <= 255;
};

const restoreIpAddresses = (s) => {
  if (s.length < 4 || s.length > 12) return [];
  if (s.length === 4) return [ s.split('').join('.') ];

  const result = [];

  const recurse = (start, parts) => {
    if (parts.length === 4 && start === s.length) {
      result.push(parts.join('.'));
      return;
    }

    if (parts.length > 4 || start >= s.length) return;

    for (let i = 1; i <= 3; i++) {
      const substr = s.slice(start, start + i);
      if (_isSubstrValid(substr)) {
        parts.push(substr);
        recurse(start + i, parts);
        parts.pop();
      }
    }
  };

  recurse(0, [], s);
  return result;
};

export default restoreIpAddresses;
