function fiveAndGreaterOnly(arr: number[]): number[] {
  const fiveOrGreater = arr.filter(num => num >= 5);
  return fiveOrGreater;
}

// test
console.log(fiveAndGreaterOnly([3, 6, 8, 2])); /// [6, 8]