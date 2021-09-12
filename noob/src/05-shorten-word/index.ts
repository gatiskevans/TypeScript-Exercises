/**
 * Write a function that returns only the first 3 letters of the given word.
 * Return the result.
 * 
 * Example
 * 
 * Input: "Peanuts"
 * Output: "Pea"
 */

function shortenWord(input: string): string {
    return input.substring(0, 3);
}

export { shortenWord };