import * as prompts from "prompts";

(async () => {
    const response = await prompts({
        type: "number",
        name: "number",
        message: "Enter a positive number",
    });

    console.log(no16(response.number));
})();

function no16(n: number): string {
    let str: string = '';
    for (let rows = 0; rows < n; rows++) {
        if (rows === 0) {
            for (let j = 0; j <= 0; j++) {
                str += '/';
            }
            for (let k = 1; k <= Math.floor(n / 2); k++) {
                str += '^';
            }
            for (let k = Math.floor(n / 2) + 1; k <= Math.floor(n / 2) + 1; k++) {
                str += "\\";
            }
            if (n / 4 > 1) {
                for (let k = Math.floor(n / 2) + 2; k < n; k++) {
                    str += "_";
                }
                for (let k = n; k > Math.floor(n / 2) + 2; k--) {
                    str += "_";
                }
            }
            for (let j = 0; j <= 0; j++) {
                str += '/';
            }
            for (let k = 1; k <= Math.floor(n / 2); k++) {
                str += '^';
            }
            for (let k = Math.floor(n / 2) + 1; k <= Math.floor(n / 2) + 1; k++) {
                str += "\\";
            }
            str += '\n';

        } else if (rows < n - 2 && rows > 0) {
            for (let cols = 0; cols < 2 * n; cols++) {
                if (cols === 0 || cols === 2 * n - 1) {
                    str += '|';
                } else {
                    str += ' ';
                }
            }
            str += '\n';
        } else if (rows === n - 2) {
            for (let cols = 0; cols <= 0; cols++) {
                str += '|'
            }
            for (let cols = 1; cols < Math.floor(n / 2) + 2; cols++) {
                str += ' ';
            }

            if (n / 4 > 1) {
                for (let k = Math.floor(n / 2) + 2; k < n; k++) {
                    str += "_";
                }
                for (let k = n; k > Math.floor(n / 2) + 2; k--) {
                    str += "_";
                }
            }

            for (let cols = 1; cols < Math.floor(n / 2) + 2; cols++) {
                str += ' ';
            }
            for (let cols = n - 1; cols <= n - 1; cols++) {
                str += '|';
            }
            str += '\n';
        } else {
            for (let cols = 0; cols <= 0; cols++) {
                str += '\\';
            }
            for (let k = 1; k <= Math.floor(n / 2); k++) {
                str += '_';
            }
            for (let k = Math.floor(n / 2) + 1; k <= Math.floor(n / 2) + 1; k++) {
                str += "/";
            }

            if (n / 4 > 1) {
                for (let k = Math.floor(n / 2) + 2; k < n; k++) {
                    str += " ";
                }
                for (let k = n; k > Math.floor(n / 2) + 2; k--) {
                    str += " ";
                }
            }
            for (let j = 0; j <= 0; j++) {
                str += '\\';
            }
            for (let k = 1; k <= Math.floor(n / 2); k++) {
                str += '_';
            }
            for (let k = Math.floor(n / 2) + 1; k <= Math.floor(n / 2) + 1; k++) {
                str += "/";
            }
            str += '\n';
        }

    }
    return str;
}