// max([]); // returns the max value of given values (array)
// min([]); // returns the min value of given values (array)

export function max(array) {
  return Math.max.apply(Math, array);
}

export function min(array) {
  return Math.min.apply(Math, array);
}
