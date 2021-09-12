const isPresent = function (string: string, target: string): boolean {
  return string.split('').some(letter => letter === target);
};

console.log(isPresent("abcd", "b")); // => true
console.log(isPresent("efghi", "a")); // => false