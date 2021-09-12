/**
 * Steps
 *
 * Write a function that accepts a positive number N.
 * The function should prints a step shape
 * with N levels using the '#' character.
 *
 * Examples:
 * steps(2) = '# '
 *            '##'
 *
 * steps(3) = '#  '
 *            '## '
 *            '###'
 *
 * steps(4) = '#   '
 *            '##  '
 *            '### '
 *            '####'
 */

function steps(n: number): void {



    for (let i = 1; i <= n; i++) {

        let blank = ' ';
        let hash = '#';

        let str = blank.repeat(n - i);
        let str2 = hash.repeat(i);

        console.log(str2 + str);

    }

}

export { steps };
