/**
 * Pyramid
 *
 * Write a function that accepts a positive number N.
 * The function should print a pyramid shape
 * with N levels using the # character.
 *
 * Examples:
 * pyramid(1) = '#'
 *
 * pyramid(2) = ' # '
 *              '###'
 *
 * pyramid(3) = '  #  '
 *              ' ### '
 *              '#####'
 */

function pyramid(n: number): void {

    for (let i = 1; i <= n; i++) {

        let blank = ' ';
        let hash = '#';

        let str = blank.repeat(n - i);
        let str2 = hash.repeat(i * 2 - 1)

        console.log(str + str2 + str);

    }
}

export { pyramid };
