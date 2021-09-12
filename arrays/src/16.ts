function evensOnly(arr: number[]): number[] {
  const onlyEven = arr.filter(num => num % 2 === 0);
  return onlyEven;
}

// test
console.log(evensOnly([3, 6, 8, 2])); /// [6, 8, 2]