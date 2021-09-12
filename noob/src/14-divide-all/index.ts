/**
 * Write a function that divides each number in the given array by 2.
 * Return the result.
 * 
 * Example
 * 
 * Input: [2, 4, 6]
 * 
 * Output: [1, 2, 3]
 */

function divideAll(input: number[]): number[] {
    return input.map(number => number / 2);
 }

export { divideAll };