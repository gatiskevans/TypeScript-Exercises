export { };

function draw(hight: number): void {
    let arr = [];

    for (let i = 1; i <= hight; i++) {
        arr.push("*");
        console.log(arr.join(''));
    }
}

draw(3);
/* Expected output:

    *
    **
    ***

*/

draw(5);
/* Expected output:

    *
    **
    ***
    ****
    *****

*/
