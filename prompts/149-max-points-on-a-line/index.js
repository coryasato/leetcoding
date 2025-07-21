// 149. Max Points on a Line - https://leetcode.com/problems/max-points-on-a-line/

// Given an array of points where points[i] = [xi, yi] represents a point on the X-Y plane, return the maximum number of points that lie on the same straight line.

// Example 1:
// Input: points = [[1,1],[2,2],[3,3]]
// Output: 3

// Example 2:
// Input: points = [[1,1],[3,2],[5,3],[4,1],[2,3],[1,4]]
// Output: 4

const _isMatch = (p1, p2) => {
  const isOneOrNegOne = (n) => n === 1 || n === -1;
  return isOneOrNegOne(p1[0] - p2[0]) && isOneOrNegOne(p1[1] - p2[1]);
};

const maxPoints = (points) => {
  const indexMap = {};
  const seenMap = {};

  for (let i = 0; i < points.length; i++) {
    const plot = points[i];

    for (let j = i + 1; j < points.length; j++) {
      const plot2 = points[j];

      if (_isMatch(plot, plot2)) {
        indexMap[i] = (indexMap[i] || [i]).concat(j);
        seenMap[j] = (seenMap[j] || []).concat(i);

        // If we previously have seen the index matched, then we have a union with another group of indexes.
        // We'll add the j index to each of the indexMap's where we've seen the current plot matched previously.
        if (i in seenMap) {
          seenMap[i].forEach(idx => {
            if (!indexMap[idx].includes(j)) {
              indexMap[idx] = indexMap[idx].concat(j);
            }
          });
        }
      }
    }
  }

  return Object.values(indexMap).reduce((acc, idxs) => {
    return acc.length > idxs.length ? acc : idxs;
  }, []).length;
};

export default maxPoints;
