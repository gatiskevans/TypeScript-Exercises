// => 1^2 + 2^2 + 2^2 = 9.

function squareRoot(arr: number[]): number {
    const squared = arr.map(number => Math.pow(number, 2));
    return squared.reduce((acc, value) => acc + value);
}

console.log(squareRoot([1, 2, 2]));