function stringItUp(arr: number[]): string[] {
   return arr.join().split(",");
}

console.log(stringItUp([2, 5, 100])); // ["2", "5", "100"]