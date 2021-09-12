export { };

function onlyTheAces(arr: string[]): string[] {
    return arr.filter(e => e === 'Ace');
}

console.log(onlyTheAces(["Ace", "King", "Queen", "Jack", "Ace"])); // Expected result: ['Ace', 'Ace']
