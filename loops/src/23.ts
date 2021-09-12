import * as prompts from "prompts";

(async () => {
    const response = await prompts({
        type: "number",
        name: "number",
        message: "Enter a positive number",
    });

    console.log(stopSign(response.number));
})();

function stopSign(n: number): string {
    let str: string = '';
    for (let rows = 0; rows <= n; rows++) {
        for (let cols = 0; cols <= n - rows; cols++) {
            str += '.';
        }
        if (rows === 0) {
            for (let cols = 0; cols <= 2 * n; cols++) {
                str += '_';
            }
        }
        if (rows >= 1) {
            for (let cols = 1; cols <= 2; cols++) {
                str += '/';
            }
            for (let cols = 1; cols < 2 * n + rows * 2 - 2; cols++) {
                str += '_';
            }
            for (let cols = 1; cols <= 2; cols++) {
                str += '\\';
            }
        }
        for (let cols = 0; cols <= n - rows; cols++) {
            str += '.';
        }
        str += '\n';
    }

    for (let row = 0; row <= 0; row++) {
        for (let cols = 1; cols <= 2; cols++) {
            str += '/';
        }
        for (let cols = 1; cols < 4 * n / 2 - 2; cols++) {
            str += '_';
        }
        for (let stop = 4 * n / 2; stop <= 4 * n / 2; stop++) {
            str += 'STOP!';
        }
        for (let cols = 1; cols < 4 * n / 2 - 2; cols++) {
            str += '_';
        }
        for (let cols = 1; cols <= 2; cols++) {
            str += '\\';
        }
        str += '\n';
    }

    for (let rows = 0; rows < n; rows++) {
        for (let cols = 0; cols < rows; cols++) {
            str += '.';
        }
        for (let cols = 1; cols <= 2; cols++) {
            str += '\\';
        }
        for (let cols = 1; cols < 4 * n - 2 * rows; cols++) {
            str += '_';
        }
        for (let cols = 1; cols <= 2; cols++) {
            str += '/';
        }
        for (let cols = 0; cols < rows; cols++) {
            str += '.';
        }
        str += '\n';
    }

    return str;
}