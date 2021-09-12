export { };

function stringToArray(arr: string[]): string[] {
    let array = arr.join('').split(" ");
    return array;
}
console.log(stringToArray(["John Doe"])); // Expected output: ['John', 'Doe']
