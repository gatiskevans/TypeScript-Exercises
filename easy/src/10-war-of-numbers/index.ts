/**
 * There's a great war between the even and odd numbers. 
 * Many numbers already lost their life in this war and it's your task to end this. 
 * You have to determine which group is larger: the even, or the odd. The larger group wins.
 * Create a function that takes an array of integers, sums the even and odd numbers seperately, 
 * then returns "Odd numbers win by X" or "Even numbers win by X", X is survivors.
 * If both groups are equal, return "There are no winners"
 */

function warOfNumbers(numbers: number[]): string {
    let oddTeam = 0;
    let evenTeam = 0;
    numbers.forEach(num => {
        if (num % 2 === 0) {
            evenTeam += num;
        } else {
            oddTeam += num;
        }
    });

    if (oddTeam === evenTeam) {
        return `There are no winners`;
    } else if (oddTeam > evenTeam) {
        return `Odd numbers win by ${oddTeam - evenTeam}`;
    } else {
        return `Even numbers win by ${evenTeam - oddTeam}`;
    }
}

export { warOfNumbers };