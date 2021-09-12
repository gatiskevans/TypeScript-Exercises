/**
 * Is Even
 *
 * Determine if given number is even
 * without using a mathematic operator ( +, -, %, /, Math, ParseInt etc.)
 * nor a conditional operator.
 *
 * Examples:
 * isEven(4) === true
 * isEven(3) === false
 */

const evenNumbers = "0, 2, 4, 6, 8";

function isEven(n: number): boolean {
    const nAsString = n.toString().split(".")[0];
    const lastChar = nAsString.slice(-1);
    return evenNumbers.includes(lastChar);

}

export { isEven };
