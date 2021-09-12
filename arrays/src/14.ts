function stringConcat(arr: number[]): string[] {
    const oneString = arr.join('');
    let concatenated = [];
    concatenated.push(oneString);
    return concatenated;
}

console.log(stringConcat([1, 2, 3])); // "123"