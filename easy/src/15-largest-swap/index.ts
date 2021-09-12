/**
 * Write a function that takes a two-digit number and determines, if it's the largest of two possible digit swaps.
 */

function largestSwap(number: number) {
    const reversed = parseInt(number.toString().split("").reverse().join(""));
    return number > reversed
}

export { largestSwap };