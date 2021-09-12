export { };

const removeFromArray = function (arr: number[], remove: number): number[] {
    return arr.filter(e => {
        if (e !== remove) {
            return arr;
        }
    });
};

console.log(removeFromArray([1, 2, 3, 4], 3)); // Expected output: [1, 2, 4]
console.log(removeFromArray([1, 2, 3, 4], 7)); // Expected output: [1, 2, 3, 4]
console.log(removeFromArray([1, 2, 3, 4], 2)); // Expected output: [1, 3, 4]
