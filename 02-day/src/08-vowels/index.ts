/**
 * Vowels
 *
 * Write a function which returns number of vowels in given string.
 *
 * Examples:
 * vowels('aeiou') === 5
 * vowels('Adam') === 2
 * vowels('Hello there!') === 4
 */
const allVowels = "aeiou";

function vowels(s: string): number {
    const letters = s.toLowerCase().split("");
    const vowels = letters.filter(letter => allVowels.includes(letter));
    return vowels.length;
}

export { vowels };
