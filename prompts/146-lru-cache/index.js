// 146. LRU Cache - https://leetcode.com/problems/lru-cache/

// Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.

// Implement the LRUCache class:

// LRUCache(int capacity) Initialize the LRU cache with positive size capacity.
// int get(int key) Return the value of the key if the key exists, otherwise return -1.
// void put(int key, int value) Update the value of the key if the key exists. Otherwise, add the key-value pair to the cache. If the number of keys exceeds the capacity from this operation, evict the least recently used key.
// The functions get and put must each run in O(1) average time complexity.

// Example 1:

// Input
// ["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
// [[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
// Output
// [null, null, null, 1, null, -1, null, -1, 3, 4]

// Explanation
// LRUCache lRUCache = new LRUCache(2);
// lRUCache.put(1, 1); // cache is {1=1}
// lRUCache.put(2, 2); // cache is {1=1, 2=2}
// lRUCache.get(1);    // return 1
// lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
// lRUCache.get(2);    // returns -1 (not found)
// lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
// lRUCache.get(1);    // return -1 (not found)
// lRUCache.get(3);    // return 3
// lRUCache.get(4);    // return 4

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
class LRUCache {
  constructor(capacity) {
    this.cache = {};
    this.capacity = capacity;
    this.queue = [];
  }

  /** Helpers */
  _moveKeyToEndOfQueue(key) {
    this.queue = this.queue.filter(item => item !== key).concat(key);
  }

  _setKeyToQueue(key) {
    if (!this.queue.includes(key)) {
      this.queue = this.queue.concat(key);
    } else {
      this._moveKeyToEndOfQueue(key);
    }
  };

  /** Methods */
  get(key) {
    if (!(key in this.cache)) return -1;

    this._moveKeyToEndOfQueue(key);
    return this.cache[key];
  }

  put(key, value) {
    // This edge case isn't explained in the prompt, so I'll return -1 if we try to add the same key to the cache.
    if (key in this.cache) return -1;

    if (Object.keys(this.cache).length === this.capacity) {
      const keyToEvict = this.queue.shift();
      delete this.cache[keyToEvict];

      this.cache[key] = value;
    } else {
      this.cache[key] = value;
    }

    this._setKeyToQueue(key);
    return null;
  }
};

// Mapping the Input | Output logic from the prompt. I'm ignoring the first "null" output in the tests so I don't have to dynamically
// create the class instance. If needed we could create a Dict and call it via:
//
// const ClassDict = { 'LRUCache': LRUCache };
// const cache = new ClassDict['LRUCache'](....args); || const cache = new ClassDict[instructions[0]](values.shift()[0]);
//
// Then we would need to hande an output array and set the instantiation call to null as the first index, then concat that with the map results.
const main = (instructions, values) => {
  const cache = new LRUCache(values.shift()[0]);

  return instructions.slice(1).map((command, i) => {
    return command === 'get'
      ? cache[command](values[i][0])
      : cache[command](values[i][0], values[i][1]);
  });
};

export default main;
