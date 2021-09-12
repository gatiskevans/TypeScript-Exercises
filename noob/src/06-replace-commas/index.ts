/**
 * Write a function that replaces all commas in the given sentence with question marks.
 * Return the result.
 * 
 * Example
 * 
 * Input: "Peanut, Butter, Sandwich"
 * Output: "Peanut? Butter? Sandwich"
 */

function replaceCommas(input: string): string {
    return input.replace(/,/g, "?");        //g means global
 }

export { replaceCommas };