function doubleNumbers(arr: number[]): number[] {
  let newArray = arr.map(number => number * 2);
  return newArray;
}

console.log(doubleNumbers([2, 5, 100])); // [4, 10, 200]