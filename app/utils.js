function removeSmallest(array) {
  let min = Math.min(...array);
  console.log(min)
  return array.filter(e => e != min);
}