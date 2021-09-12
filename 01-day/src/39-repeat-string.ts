export { };

const repeatString = (str: string, times: number): string => {
    let string = '';
    for (let i = 1; i <= times; i++) {
        string += str;
    }
    return string;
};

console.log(repeatString("a", 4)); // Expected output: 'aaaa'
console.log(repeatString("b", 5)); // Expected output: 'bbbbb'
