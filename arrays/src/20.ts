function flatten(arr: any): any {
  return arr.reduce((a, b) => a.concat(b));
}

var arrays = [["1", "2", "3"], [true], [4, 5, 6]];

console.log(flatten(arrays)); // ["1", "2", "3", true, 4, 5, 6];