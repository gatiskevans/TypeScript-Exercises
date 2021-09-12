import * as prompts from "prompts";

(async () => {
    const response = await prompts({
        type: "number",
        name: "number",
        message: "Enter a positive number",
    });

    console.log(hammer(response.number));
})();

function hammer(n: number): string {
    let str: string = '';
    for (let rows = 1; rows <= n; rows++) {
        for (let cols = 1; cols <= 3 * n; cols++) {
            str += '-';
        }
        for (let cols = 0; cols <= rows; cols++) {
            if (cols === 0 || cols === rows) {
                str += '*';
            } else {
                str += '-';
            }
        }
        for (let cols = 1; cols < 2 * n - rows; cols++) {
            str += '-';
        }
        str += '\n';
    }

    for (let rows = 1; rows <= n / 2; rows++) {
        for (let cols = 1; cols <= 3 * n; cols++) {
            str += '*';
        }
        for (let cols = 0; cols < 2 * n; cols++) {
            if (cols === 0 || cols === n) {
                str += '*';
            } else {
                str += '-';
            }
        }
        str += '\n';
    }

    for (let rows = 1; rows <= n / 2; rows++) {
        for (let cols = 0; cols <= 2 * n + Math.ceil(n / 2); cols++) {
            str += '-';
        }
        for (let cols = 0; cols <= n / 2 - rows; cols++) {
            if (cols === Math.floor(n / 2) - rows) {
                str += '*';
            } else {
                str += '-';
            }
        }
        for (let cols = 1; cols < rows; cols++) {
            if (rows === Math.floor(n / 2)) {
                str += '*';
            } else {
                str += '-';
            }
        }
        for (let cols = 1; cols < n; cols++) {
            if (rows === Math.floor(n / 2)) {
                str += '*';
            } else {
                str += '-';
            }
        }
        for (let cols = 1; cols <= rows; cols++) {
            if (cols === rows || rows === Math.floor(n / 2)) {
                str += '*';
            } else {
                str += '-';
            }
        }
        for (let cols = 1; cols <= n - rows; cols++) {
            str += '-';
        }

        str += '\n';
    }

    return str;
}