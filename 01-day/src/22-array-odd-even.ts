export { };

function goThroughNumbers(start: number, end: number): void {
    let num = [];
    for (let i = start; i <= end; i++) {
        num.push(i);
    }

    if (start > end) {
        console.log('Invalid output');
    } else {

        num.filter(e => {

            if (e % 2 === 0) {
                console.log(e + " - even");
            } else console.log(e + " - odd");

        });
    }
}

goThroughNumbers(3, 7);
/* Expected output:

    > 3 - odd
    > 4 - even
    > 5 - odd
    > 6 - even
    > 7 - odd

*/

goThroughNumbers(8, 12);
/* Expected output:

    > 8 - even
    > 9 - odd
    > 10 - even
    > 11 - odd
    > 12 - even

*/

goThroughNumbers(4, 3);
// Expected output: 'invalid input'
