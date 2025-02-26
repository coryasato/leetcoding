const combinations = (iter) => {
  return iter.length === 0
    ? [[]]
    : combinations(iter.slice(1)).flatMap(combo => [[iter[0], ...combo], combo]);
};

export default combinations;
