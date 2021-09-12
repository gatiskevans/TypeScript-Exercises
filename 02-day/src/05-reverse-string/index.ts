/**
 * Reverse String
 *
 * For given string return a new string
 * with the reversed order of characters.
 *
 * Examples:
 * reverse('apple') === 'elppa'
 * reverse('hello') === 'olleh'
 * reverse('Greetings!') === '!sgniteerG'
 */

function reverse(str: string): string {
    const letters = str.split("");
    const newLetters = [];
    for (let i = letters.length; i >= 0; i--) {
        const letter = letters[i];
        newLetters.push(letter);
    }
    return newLetters.join("");
}

export { reverse };
