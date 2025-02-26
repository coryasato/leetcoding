export const getPermutationsForArr = (arr) => {
  if (arr.length <= 1) return [arr];

  let res = [];

  arr.forEach((entry, i) => {
    const remaining = arr.slice(0, i).concat(arr.slice(i + 1));
    const perms = getPermutationsForArr(remaining);

    for (let perm of perms) {
      res.push([entry, ...perm]);
    }
  });

  return res;
};

/**
 * Consise functional style with flatMap.
*/
const _excludeIndex = (i, arr) => [...arr.slice(0, i), ...arr.slice(i + 1)];
const permWithFlatMap = (arr) => {
  return arr.length === 0
    ? [[]]
    : arr.flatMap((item, i) => permWithFlatMap(_excludeIndex(i, arr)).map(rest => [item, ...rest]));
};

/**
 * Another functional style with flatMap.
*/

// Returns rotations for an array. Imagine a carousel rotating clockwise.
// Ex: [1,2,3] => [[1, 2, 3], [2, 3, 1], [3, 1, 2]]
//     Indexes => [[0, 1, 2], [1, 2, 0], [2, 0, 1]]
const _rotations = ([item, ...rest], bucket=[]) => {
  return item === undefined
    ? []
    : [[item, ...rest, ...bucket], ...rotations(rest, [...bucket, item])];
};
const permWithFlatMapRotate = ([item, ...rest]) => {
  return item === undefined
    ? [[]]
    : [...permWithFlatMapRotate(rest).flatMap(n => _rotations([item, ...n]))];
};

/**
 * Heap's algorithm - // https://en.wikipedia.org/wiki/Heap%27s_algorithm
 * O(n!) Factorial time complexity for effeciency.
 */

// Mutative!
const _swapIndicesInPlace = (arr, left, right) => {
  const memo = arr[left];
  arr[left] = arr[right];
  arr[right] = memo;
};

export const heapPermutation = (arr) => {
  let res = [];

  const generatePerms = (list, k) => {
    if (k === 1) {
      res.push([...list]);
      return;
    }

    generatePerms(list, k-1);

    for (let i = 0; i < (k-1); i++) {
      if (k % 2 === 0) {
        _swapIndicesInPlace(list, i, k-1);
      } else {
        _swapIndicesInPlace(list, 0, k-1);
      }

      generatePerms(list, k-1);
    }
  };

  generatePerms([...arr], arr.length);  // Clone the argument to keep the fn pure
  return res;
};