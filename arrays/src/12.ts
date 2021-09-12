const randomNumber = (Math.random() * 1000000).toFixed();

function reverseRandomNumber(): number {
    return parseInt(randomNumber.toString().split('').reverse().join(''));
}

console.log(randomNumber);
console.log(reverseRandomNumber());