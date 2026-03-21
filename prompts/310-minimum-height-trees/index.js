// 310. Minimum Height Trees - https://leetcode.com/problems/minimum-height-trees/

// A tree is an undirected graph in which any two vertices are connected by exactly one path. In other words, any connected graph without simple cycles is a tree.

// Given a tree of n nodes labelled from 0 to n - 1, and an array of n - 1 edges where edges[i] = [ai, bi] indicates that there is an undirected edge between the two nodes ai and bi in the tree, you can choose any node of the tree as the root. When you select a node x as the root, the result tree has height h. Among all possible rooted trees, those with minimum height (i.e. min(h))  are called minimum height trees (MHTs).

// Return a list of all MHTs' root labels. You can return the answer in any order.

// The height of a rooted tree is the number of edges on the longest downward path between the root and a leaf.

// Example 1:
// Input: n = 4, edges = [[1,0],[1,2],[1,3]]
// Output: [1]
// Explanation: As shown, the height of the tree is 1 when the root is the node with label 1 which is the only MHT.

// Example 2:
// Input: n = 6, edges = [[3,0],[3,1],[3,2],[3,4],[5,4]]
// Output: [3,4]

// NOTE: This is pretty messy. I think this is a bit overboard given the scope of the prompt.
// Whats overdone is the checking for duplicate edges and conceptually constructing tree depths
// via the queue. The code is travelling all relations to the leaves. The n parameter is being
// under-utilized and thus probably the key to why this strategy is slow and verbose.
const findMinHeightTrees = (n, edges) => {
  const map = new Map();
  let res = [];
  let minDepth = n;

  // Builds a map of relations per node seen.
  // { Node0: [Node1,Node2, Node3], Node1: [Node0], Node2: [Node0], ... }
  edges.forEach(([a, b]) => {
    if (map.has(a)) {
      map.get(a).add(b);
    } else {
      map.set(a, new Set([b]));
    }

    if (map.has(b)) {
      map.get(b).add(a);
    } else {
      map.set(b, new Set([a]));
    }
  });

  // For each node, we treat is as a root and dig through the relation chain until we see every node.
  // Each time we dig to another tier of neighboring nodes, we treat that as a depth jump, or building another
  // tier of a tree. This tells us how tall the tree will need to be given the root node.
  map.keys().forEach(root => {
    const nodes = new Set([root]);
    let depth = 0;
    let queue = [ [...map.get(root)] ];

    while (queue.length > 0) {
      const neighbors = queue.shift();
      let relations = new Set();

      neighbors.forEach(neighbor => {
        if (neighbor !== root) {
          nodes.add(neighbor);
          relations = relations.union(map.get(neighbor)).difference(nodes);
        }
      });

      if (relations.size > 0) {
        queue.push([...relations]);
      }

      depth++;
    }

    if (depth <= minDepth) {
      res = depth < minDepth ? [root] : res.concat(root);
    }

    minDepth = Math.min(minDepth, depth);
  });

  return res;
};

export default findMinHeightTrees;
