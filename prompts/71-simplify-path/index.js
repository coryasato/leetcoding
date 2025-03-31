// 71. Simplify Path - https://leetcode.com/problems/simplify-path/
// You are given an absolute path for a Unix-style file system, which always begins with a slash '/'. Your task is to transform this absolute path into its simplified canonical path.

// The rules of a Unix-style file system are as follows:

// A single period '.' represents the current directory.
// A double period '..' represents the previous/parent directory.
// Multiple consecutive slashes such as '//' and '///' are treated as a single slash '/'.
// Any sequence of periods that does not match the rules above should be treated as a valid directory or file name. For example, '...' and '....' are valid directory or file names.
// The simplified canonical path should follow these rules:

// The path must start with a single slash '/'.
// Directories within the path must be separated by exactly one slash '/'.
// The path must not end with a slash '/', unless it is the root directory.
// The path must not have any single or double periods ('.' and '..') used to denote current or parent directories.
// Return the simplified canonical path.

// Example 1:
// Input: path = "/home/"
// Output: "/home"
// Explanation:
// The trailing slash should be removed.

// Example 2:
// Input: path = "/home//foo/"
// Output: "/home/foo"
// Explanation:
// Multiple consecutive slashes are replaced by a single one.

// Example 3:
// Input: path = "/home/user/Documents/../Pictures"
// Output: "/home/user/Pictures"
// Explanation:
// A double period ".." refers to the directory up a level (the parent directory).

// Example 4:
// Input: path = "/../"
// Output: "/"
// Explanation:
// Going one level up from the root directory is not possible.

// Example 5:
// Input: path = "/.../a/../b/c/../d/./"
// Output: "/.../b/d"
// Explanation:
// "..." is a valid name for a directory in this problem.

// Utilizes an array to host valid paths to simplify the end join, backtracking ("../") and ingnoring of double slashes and cwd.
//
// 1) We could make this more memory efficient by working with a result string directly. We would then need to either loop backwards
//    to, "go up a directory", removing the last path as well as handle slash placement. Not too bad, but adds more potential loops. To avoid the
//    loops, we could memoize the starting index of the last directory and simply slice it off.
// 2) TOKEN_REG is not needed as the constraints to the problem dictate a valid Unix path and specific chars for the arg. REG_EXs are usually slow.
//    Its there because it reads better.

const simplifyPath = (path) => {
  const TOKEN_REG = /[a-zA-Z._]/;
  let arr = [];
  let token = '';

  for (let i = 1; i < path.length; i++) {
    const char = path[i];

    if (char === '/') {
      if (token === '..') {
        arr.pop();
        token = '';
      } else if (token === '.') {
        token = '';
      } else if (token.length > 0) {
        arr.push(token);
        token = '';
      }
    } else if (TOKEN_REG.test(char)) {
      token += char;

      if (i === path.length-1) {
        arr.push(token);
      }
    }
  }

  return '/' + arr.join('/');
};

export default simplifyPath;
