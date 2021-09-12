/**
 * Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order in a new array.
 */

function maxMin(numbers: number[]): number[] {
    let min = Math.min.apply(null, numbers);
    let max = Math.max.apply(null, numbers);
    return [min, max];
}

export { maxMin };