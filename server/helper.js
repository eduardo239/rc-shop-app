const isEmpty = (obj) => {
  return Object.keys(obj).length === 0;
};

const arrayRemover = (arr, value) => {
  console.log(arr);
  console.log(value);
  return arr.filter((arr) => arr !== value);
};

module.exports = {
  isEmpty,
  arrayRemover,
};
