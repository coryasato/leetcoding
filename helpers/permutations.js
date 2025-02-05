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
