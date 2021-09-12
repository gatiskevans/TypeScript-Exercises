export { };

/**
 * Create a function called fullName, which concatenates two strings together
 */
function fullName(first: string, last: string): string {
    return first.concat(" " + last);
}

console.log(fullName("John", "Doe")); //Expected output: 'John Doe'
