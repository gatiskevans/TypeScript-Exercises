/**
 * Convert a phrase to its acronym.
 *
 * Techies love their TLA (Three Letter Acronyms)!
 *
 * Help generate some jargon by writing a program that converts a long name like Portable Network Graphics to its acronym (PNG).
 */

function parse(input: string): string {

    const words = input.split(/-| |_/);
    const letters = words.map(word => word.charAt(0));
    return letters.join('').toUpperCase();

}

export { parse };
