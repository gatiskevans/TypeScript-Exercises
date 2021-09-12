import * as prompts from "prompts";

(async () => {
    const response = await prompts({
        type: "number",
        name: "number",
        message: "Enter a positive number",
    });

    console.log(arrow(response.number));
})();

function arrow(n: number): string {
    let str: string = '';
    for (let rows = 1; rows <= n; rows++) {
        for (let cols = 1; cols <= n / 2; cols++) {
            if (rows === n) {
                str += '#';
            } else {
                str += '.';
            }
        }
        for (let cols = 1; cols <= n; cols++) {
            if (cols === 1 || cols === n || rows === 1) {
                str += '#';
            } else {
                str += '.';
            }
        }
        for (let cols = 1; cols <= n / 2; cols++) {
            if (rows === n) {
                str += '#';
            } else {
                str += '.';
            }
        }
        str += '\n';
    }

    for (let rows = 1; rows < n; rows++) {
        for (let cols = 0; cols < n; cols++) {
            if (cols === rows) {
                str += '#';
            } else {
                str += '.';
            }
        }
        for (let cols = 0; cols < (n % 2 === 0 ? n : n - 1); cols++) {
            if (n % 2 !== 0) {
                if (cols === n - 2 - rows) {
                    str += '#';
                } else {
                    str += '.';
                }
            } else {
                if (cols === n - 1 - rows) {
                    str += '#';
                } else {
                    str += '.';
                }
            }
        }
        str += '\n';
    }

    return str;
}