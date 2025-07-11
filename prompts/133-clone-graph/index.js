// 133. Clone Graph - https://leetcode.com/problems/clone-graph/

// Given a reference of a node in a connected undirected graph.
// Return a deep copy (clone) of the graph.
// Each node in the graph contains a value (int) and a list (List[Node]) of its neighbors.

// class Node {
//     public int val;
//     public List<Node> neighbors;
// }

// Test case format:

// For simplicity, each node's value is the same as the node's index (1-indexed). For example, the first node with val == 1, the second node with val == 2, and so on. The graph is represented in the test case using an adjacency list.
// An adjacency list is a collection of unordered lists used to represent a finite graph. Each list describes the set of neighbors of a node in the graph.
// The given node will always be the first node with val = 1. You must return the copy of the given node as a reference to the cloned graph.

// Example 1:
// Input: adjList = [[2,4],[1,3],[2,4],[1,3]]
// Output: [[2,4],[1,3],[2,4],[1,3]]
// Explanation: There are 4 nodes in the graph.
// 1st node (val = 1)'s neighbors are 2nd node (val = 2) and 4th node (val = 4).
// 2nd node (val = 2)'s neighbors are 1st node (val = 1) and 3rd node (val = 3).
// 3rd node (val = 3)'s neighbors are 2nd node (val = 2) and 4th node (val = 4).
// 4th node (val = 4)'s neighbors are 1st node (val = 1) and 3rd node (val = 3).

// Example 2:
// Input: adjList = [[]]
// Output: [[]]
// Explanation: Note that the input contains one empty list. The graph consists of only one node with val = 1 and it does not have any neighbors.

// Example 3:
// Input: adjList = []
// Output: []
// Explanation: This an empty graph, it does not have any nodes.

/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

const _NodeForMap = (val, neighbors=[]) => ([ val, { val, neighbors }]);
const _arrToAdjList = (arr) => new Map(arr.map((neighbors, i) => _NodeForMap(i+1, neighbors)));

// NOTE: We're doing alot of hoop jumping here to make sure we're doing the prompt properly.
// We could easily just iterate over the adjList input, but to make sure we're doing a graph-like traversal,
// we use a Map in place of a graph, where the ID will indicate the node value. This way we're not determinate on order
// as the prompt suggests in its adjacent list explanation.
const cloneGraph = (arr) => {
  if (arr.length === 0) return arr;

  const adjList = _arrToAdjList(arr);
  const node = adjList.get(1);

  const clone = new Map([ _NodeForMap(node.val, node.neighbors) ]);

  let queue = [ ...clone.get(1).neighbors ];
  let seen = new Set([1]);

  while (queue.length > 0) {
    let nodeIdx = queue.shift();
    // Important! If we've already visited the node, skip it to avoid cyclical visits.
    while (seen.has(nodeIdx)) {
      nodeIdx = queue.shift();
    }
    // If theres nothing left in the queue, we're done.
    if (!nodeIdx) break;

    let adjNode = adjList.get(nodeIdx);
    clone.set(adjNode.val, { val: adjNode.val, neighbors: adjNode.neighbors });
    seen.add(nodeIdx);

    // En-queue nodes that we haven't yet seen.
    adjNode.neighbors.forEach(n => {
      if (!seen.has(n) && !queue.includes(n)) {
        queue.push(n);
      }
    });
  }

  // NOTE: The prompt asks to return a deep clone of the graph, however the output example wants the neighbors in its proper, "index as value".
  // We do that here. Again, we utilize the Map as a lookup instead of relying on where the node would be in an array per index.
  // We cannot use Map.keys() because that will return the order in which each node was input to the Map, which will not always be linear (1..n).
  return Array.from(new Array(clone.size), (_, i) => {
    return clone.get(i+1).neighbors;
  });
};

console.log(cloneGraph([[2,4],[1,3],[2,4],[1,3]]));

export default cloneGraph;
