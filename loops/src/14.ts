import * as prompts from "prompts";

(async () => {
    const response = await prompts({
        type: "number",
        name: "number",
        message: "Enter a positive number",
    });

    console.log(diamond(response.number));
})();

function diamond(n: number): string {
    let str: string = '';
    if (n % 2 !== 0) {
        for (let rows = 0; rows <= Math.floor(n / 2); rows++) {
            for (let cols = rows; cols < Math.floor(n / 2); cols++) {
                str += '-';
            }
            for (let star = 0; star <= 2 * rows; star++) {
                if (star === 0 || star === 2 * rows) {
                    str += '*';
                } else {
                    str += '-';
                }
            }
            for (let cols = rows; cols < Math.floor(n / 2); cols++) {
                str += '-';
            }

            str += '\n';
        }

        for (let rows = Math.floor(n / 2) - 1; rows >= 0; rows--) {
            for (let cols = 0; cols < Math.floor(n / 2) - rows; cols++) {
                str += '-';
            }

            for (let star = rows * 2; star >= 0; star--) {
                if (star === 0 || star === rows * 2) {
                    str += '*';
                } else {
                    str += '-';
                }
            }

            for (let cols = 0; cols < Math.floor(n / 2) - rows; cols++) {
                str += '-';
            }

            str += '\n';
        }

        return str;
    } else {
        for (let rows = 1; rows <= n / 2; rows++) {
            for (let cols = 1; cols <= n / 2 - rows; cols++) {
                str += '-';
            }

            for (let star = 1; star <= rows * 2; star++) {
                if (star === 1 || star === rows * 2) {
                    str += '*';
                } else {
                    str += '-';
                }
            }

            for (let cols = 1; cols <= n / 2 - rows; cols++) {
                str += '-';
            }
            str += '\n';
        }
        for (let rows = n / 2 - 1; rows >= 1; rows--) {
            for (let cols = 0; cols < n / 2 - rows; cols++) {
                str += '-';
            }

            for (let star = 2 * rows; star >= 1; star--) {
                if (star === 1 || star === 2 * rows) {
                    str += '*';
                } else {
                    str += '-'
                }
            }

            for (let cols = 0; cols < n / 2 - rows; cols++) {
                str += '-';
            }
            str += '\n';
        }
        return str;
    }
}