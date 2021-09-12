import * as prompts from "prompts";

(async () => {
    const response = await prompts({
        type: "number",
        name: "number",
        message: "Enter a positive number",
    });

    console.log(numberSymmetry(response.number));
})();

function numberSymmetry(n: number): string {

    let str: string = '';

    for (let rows = n; rows > 0; rows--) {
        for (let cols = n; cols > n - rows; cols--) {
            str += `${cols}`;
        }
        for (let k = 1; k <= (n - rows); k++) {
            str += '  ';
        }
        for (let cols = (n - rows + 1); cols <= n; cols++) {
            str += `${cols}`;
        }
        str += '\n';
    }

    return str;

}