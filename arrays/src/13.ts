function total(arr: number[]): number {
  return arr.reduce((acc: number, value: number): number => acc + value);
}

console.log(total([1, 2, 3])); // 6