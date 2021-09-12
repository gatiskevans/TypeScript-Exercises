/**
 * Second Largest
 *
 * Array of numbers are passed in the function, your task is to find the second largest number.
 */

function secondLargest(array: number[]): number {
    const descending = array.sort(function (a, b) { return a - b }).reverse();
    return descending[1];
}

export { secondLargest };
