export { };

/**
 * Create a function protectEmail which hides some symbols of the email
 */

function protectEmail(email: string): string {
    let splitted = email.split("@");
    let part1 = splitted[0];
    part1 = part1.substring(0, 3);
    let part2 = splitted[1];
    return part1 + "...@" + part2;
}

console.log(protectEmail("secret123@codelex.io")); // Expected result: sec...@codelex.io
console.log(protectEmail("example@example.com")); // Expected result: exa...@example.com
