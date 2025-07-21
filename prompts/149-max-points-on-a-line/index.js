// 149. Max Points on a Line - https://leetcode.com/problems/max-points-on-a-line/

// Given an array of points where points[i] = [xi, yi] represents a point on the X-Y plane, return the maximum number of points that lie on the same straight line.

// Example 1:
// Input: points = [[1,1],[2,2],[3,3]]
// Output: 3

// Example 2:
// Input: points = [[1,1],[3,2],[5,3],[4,1],[2,3],[1,4]]
// Output: 4

const _isMatch = (p1, p2) => {
  const isOneOrNegOne = (n) => n === 0 || n === 1 || n === -1;
  return isOneOrNegOne(p1[0] - p2[0]) && isOneOrNegOne(p1[1] - p2[1]);
};

const maxPoints = (points) => {
  const indexMap = {};  // { <indexOfPlot1>: [ indexOfPlot2 ] } Every plot that matches the current plot1 index.
  const seenMap = {};   // { <indexOfPlot2>: [ indexOfPlot1 (indexMapIndex) ] } Everywhere a plot was matched, what indexMap properties does the index exist in.

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
  // Utilizing Sets here to leverage the union method and uniqueness of values.
  // What we are essentially doing is the making sure all matched "plot2" or "j" indexes in seenMap are applied to its indexMap equivalent.
  // Why? Because we know if seenMap has multiple indexes there is a connection between two indexMap properties. We want to combine the
  // plots together as a union.
  //
  // So if: indexMap['1'] is [1,4,5] and indexMap['2'] is [2,5], then seenMap['5'] will be [1,2] (1,2 are the indexes of indexMap).
  // We know that 5 connects the two and that index 2 is the missing connection plot. Union the two Sets to do so.
  // The result will be [1,4,5,2] for arg: [[1,1],[3,2],[1,4],[5,3],[4,1],[2,3]]
  const greatestList = Object.values(seenMap).reduce((acc, seenList) => {
    const listOfConnectedIdxs = seenList.reduce((acc, indexMapIdx) => {
      return acc.union(new Set(indexMap[indexMapIdx]));
    }, new Set());

    return acc.size > listOfConnectedIdxs.size ? acc : listOfConnectedIdxs;
  }, new Set());

  return greatestList.size;
};

export default maxPoints;
