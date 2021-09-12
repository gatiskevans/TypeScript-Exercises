function arrFunction(length: number): number[] {
    const producesArray = Array.apply(null, Array(length)).map((x: number, i: number): number => i);
    return producesArray;
}

console.log(arrFunction(5)); // => [0,1,2,3,4]