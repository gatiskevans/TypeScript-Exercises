import * as prompts from "prompts";

(async () => {
    const response = await prompts({
        type: "number",
        name: "number",
        message: "Enter a positive number",
    });

    console.log(diamondShape(response.number));
})();

function diamondShape(n: number): string {
    let str: string = '';

    for (let rows = 1; rows <= n; rows++) {

        for (let k = 1; k <= (n - rows); k++) {
            str += ' ';
        }
        for (let cols = 1; cols <= rows; cols++) {
            str += '* ';
        }

        str += '\n';
    }

    for (let rows = (n - 1); rows >= 1; rows--) {

        for (let cols = 1; cols <= (n - rows); cols++) {
            str += ' ';
        }
        for (let k = 1; k <= (rows); k++) {
            str += '* ';
        }

        str += '\n';
    }

    return str;

}