function removeSmallest(array) {
  let min = Math.min(...array);
  return array.filter(e => e != min);
}