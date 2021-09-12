export { };

const count = (string: string, word: string): number => {
    const arr = string.toLowerCase().split(" ");

    let see = [];
    see.push(word);
    let counter = 0;

    arr.filter(e => {

        if (e === see[0]) {
            counter++;
        }

    });
    return counter;
};

console.log(count("The quick brown fox jumps over the lazy dog", "the")); // Expected output: 2
console.log(count("The quick brown fox jumps over the lazy dog", "fox")); // Expected output: 1
