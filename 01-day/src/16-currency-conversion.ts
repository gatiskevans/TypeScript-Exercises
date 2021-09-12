export { };

/**
 * Currency Formatting
 *
 * The business is now breaking into the Brazilian market
 * Write a new function for converting to the Brazilian real
 * They have also decided that they should add a 1% fee to all foreign transactions
 * Find a way to add 1% to all currency conversions (think about the DRY (don't repeat yourself) principle)
 */

// You are allowed to change this function
const poundToUSD = 1.39;
const poundToBRL = 7.31;
const fee = 0.01;

function convertToUSD(price: number): string {
    return (price * poundToUSD * fee).toFixed(2);
}
// You are allowed to change this function
function convertToBRL(price: number): string {
    return (price * poundToBRL * fee).toFixed(2);
}

const product = "You don't know JS";
const price = 12.5;
const priceInUSD = convertToUSD(price);
const priceInBRL = convertToBRL(price);

console.log("Product: " + product);
console.log("Price: $" + priceInUSD);
console.log("Price: R$" + priceInBRL);

/* Expected output:

    > Product: You don't know JS
    > Price: $?
    > Price: R$?

*/