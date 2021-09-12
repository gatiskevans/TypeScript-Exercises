function monkeyCount(count: number): number[] {
    const monkeys = Array.apply(null, Array(count)).map((x, i) => i + 1);
    return monkeys;
}

console.log(monkeyCount(10)); // => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(monkeyCount(1)); // => [1]