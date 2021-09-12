/**
 * Write a function that rounds up the given number to two decimal places.
 * 
 * Example
 * 
 * Input: 4.555
 * 
 * Output: 4.56
 */

function roundTofixed(input: number): number {
    return Math.round(input * 100) / 100;   //turn 4.555 into 455.5, round it up into 456 and then divide by 100 to get 4.56
}

export { roundTofixed };