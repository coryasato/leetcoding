// https://stackoverflow.com/questions/66108781/finding-all-permutations-of-array-elements-as-concatenated-strings/66130419#66130419

const permutations = function*(arr) {
  if (arr.length < 2) {
    yield arr;
  } else {
    for (const perm of permutations(arr.slice(1))) {
      for (const rotation of rotations(perm, arr[0])) {
        yield rotation;
      }
    }
  }
};

const rotations = function*(arr, item) {
  if (arr.length === 0) {
    yield [item];
  } else {
    yield *chain(
      [[item, ...arr]],
      map(rotations(arr.slice(1), item), rotation => [arr[0], ...rotation])
    );
  }
};

const chain = function*(...ts) {
  for (const t of ts) {
    for (const e of t) {
      yield e;
    }
  }
};

const map = function*(arr, fn) {
  for (const item of arr) {
    yield fn(item);
  }
};

export const printPerms = (arr, fn=()=>true) => {
  for (const perm of permutations(arr)) {
    if (fn(perm)) {
      // If we wanted to stop the generator, it would be here. Simply break or return on
      // some conditional logic to stop the program calculating more permutations.
      console.log(perm.join(''));
    }
  }
};

// printPerms([1,2,3]);

// Pretty cool! Here we pass a conditional fn to print the permutations only if
// a monkey comes before a chicken in an array.
// const printAnimals = () => {
//   const animals = ["🐒", "🐀", "🐓", "🐝"];
//   printPerms(animals, (perm) => {
//     return perm.indexOf("🐒") < perm.indexOf("🐓");
//   })
// };
// printAnimals();

export default permutations;
