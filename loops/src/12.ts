import * as prompts from "prompts";

(async () => {
    const response = await prompts({
        type: "number",
        name: "number",
        message: "Enter a positive number",
    });

    console.log(pattern(response.number));
})();

function pattern(n: number): string {
    let str: string = '';

    for (let rows = 1; rows <= n; rows++) {
        for (let cols = 1; cols <= n * 2; cols++) {

            if (rows > 1 && rows < n && cols > 1 && cols < n * 2) {
                str += '/';
            } else {
                str += "*";
            }
        }

        if (rows === Math.ceil(n / 2)) {
            for (let middle = 1; middle <= n; middle++) {
                str += '|';
            }
        } else {
            for (let space = 1; space <= n; space++) {
                str += ' ';
            }
        }

        for (let cols = 1; cols <= n * 2; cols++) {

            if (rows > 1 && rows < n && cols > 1 && cols < n * 2) {
                str += '/';
            } else {
                str += "*";
            }
        }
        str += '\n';
    }
    return str;
}