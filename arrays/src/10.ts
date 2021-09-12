const integerArray = [4, 3, 9, 7, 2, 1]; // => [2,9,3,49,4,1]

function processIntegers(arr: number[]): number[] {
    return arr.map(integer => {
        if (Math.sqrt(integer) % 1 === 0) {
            return Math.sqrt(integer);
        } else {
            return Math.pow(integer, 2);
        }
    });
}

console.log(processIntegers(integerArray));