let array: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];

function checkIfEmpty(): number[] {
    if (array !== null) {
        if (array.length > 0) {
            const positiveNum = array.filter(positive => positive >= 0).length;
            const negativeNum = array.filter(negative => negative < 0);

            const sumOfNeg = negativeNum.reduce((acc, value) => acc + value);

            let newArr = [positiveNum, sumOfNeg];
            return newArr;
        } else {
            return array;
        }
    } else {
        array = [];
        return array;
    }
}


console.log(checkIfEmpty());


