let arr = [1, -4, 7, 12]; // => 1 + 7 + 12 = 20

const positive = arr.filter(positive => positive >= 0);
const sum = positive.reduce((acc, value) => acc + value);

console.log(sum);