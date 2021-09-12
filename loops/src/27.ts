import * as prompts from "prompts";

(async () => {
    const response = await prompts({
        type: "number",
        name: "number",
        message: "Enter a positive number",
    });

    console.log(unaligned(response.number));
})();

function unaligned(n: number): string {
    let str: string = '';
    for (let rows = 1; rows <= n; rows++) {
        if (rows % 2 === 0) {
            for (let cols = 1; cols <= 2 * n; cols++) {
                if (cols % 2 === 0) {
                    str += '#';
                } else {
                    str += ' ';
                }
            }
        } else {
            for (let cols = 1; cols <= 2 * n; cols++) {
                if (cols % 2 === 0) {
                    str += ' ';
                } else {
                    str += '#';
                }
            }
        }
        str += '\n';
    }
    return str;
}