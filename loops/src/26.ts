import * as prompts from "prompts";

(async () => {
    const response = await prompts({
        type: "number",
        name: "number",
        message: "Enter a positive number",
    });

    console.log(multipilcationTable(response.number));
})();

function multipilcationTable(n: number): string {
    let str: string = '';
    for (let rows = 0; rows <= 0; rows++) {
        for (let cols = rows; cols <= 0; cols++) {
            str += " * ";
        }
        for (let cols = 1; cols <= 1; cols++) {
            str += '|';
        }

        for (let cols = 2; cols <= n + 1; cols++) {
            if (cols - 1 >= 10) {
                str += `  ${cols - 1}`;
            } else {
                str += `   ${cols - 1}`;
            }
        }
        str += '\n';
    }
    for (let rows = 0; rows <= 0; rows++) {
        for (let cols = 1; cols < n + 2; cols++) {
            str += '----';
        }
        str += '\n';
    }

    for (let rows = 1; rows <= n; rows++) {
        for (let cols = 0; cols <= 0; cols++) {
            if (rows >= 10) {
                str += `${rows} `;
            } else {
                str += ` ${rows} `;
            }
        }

        for (let cols = 0; cols <= 0; cols++) {
            str += '|';
        }

        for (let cols = 1; cols <= n; cols++) {
            if (cols * rows < 10) {
                str += `   ${cols * rows}`;
            } else if (cols * rows >= 10 && cols * rows < 100) {
                str += `  ${cols * rows}`;
            } else if (cols * rows >= 100 && cols * rows < 1000) {
                str += ` ${cols * rows}`;
            } else {
                str += `${cols * rows}`;
            }
        }

        str += '\n';
    }
    return str;
}