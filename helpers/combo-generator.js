// https://stackoverflow.com/questions/70114308/trying-to-make-a-recursive-function-that-returns-all-combinations-of-an-input-ar

// This will have a some unneccessary intermediate values due to the slice. The SO answer describes it.
// To remmedy, use an int index instead with a helper function to increment up to the length of the argument (base case).
const combinations = function* (iter) {
  if (iter.length === 0) return yield [];

  for (const combo of combinations(iter.slice(1))) {
    yield [ iter[0], ...combo];
    yield combo;
  }
};

const printArr = arr => {
  for (const combo of combinations(arr)) {
    // We can assert conditionals here whether to return the combo or not.
    // Also, we could return or break early if we were to looking for something specific.
    console.log(combo);
  }
  // OR
  // console.log(Array.from(combinations(arr)));
};
export default combinations;
