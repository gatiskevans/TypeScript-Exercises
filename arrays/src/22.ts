const swapCase = function (string: string): string {
    const upper = string.split(' ').map((word, index) => {
        if (index % 2 === 0) {
            return word.toUpperCase();
        } else return word;
    });
    return upper.join(' ');;
};

console.log(swapCase("hey gurl, lets javascript together sometime")); // => "HEY gurl, LETS javascript TOGETHER sometime"