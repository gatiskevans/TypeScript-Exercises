function findNeedle(arr: string[]): string[] {
    return arr.filter((needle, index) => {
        if (needle === 'needle') {
            console.log("found the needle at position " + index);
        }
    });
}

findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk']); // should return "found the needle at position 5"