import * as prompts from "prompts";

(async () => {
    const response = await prompts({
        type: "number",
        name: "number",
        message: "Enter the size:",
    });

    const responseVersion = await prompts({
        type: "text",
        name: "version",
        message: "Select the type: (a/b/c/d)",
        validate: value => value.toUpperCase() === ["A", "B", "C", "D"]
    });

    console.log(triangle(response.number, responseVersion.version));
})();

function triangle(n: number, type: string): string {
    let str: string = '';
    if (type.toUpperCase() === "A") {
        for (let rows = 1; rows <= n; rows++) {
            for (let cols = 1; cols <= rows * 2; cols++) {
                if (cols % 2 !== 0) {
                    str += '#';
                } else {
                    str += ' ';
                }
            }
            str += '\n';
        }
        return str;
    }
    if (type.toUpperCase() === "B") {
        for (let rows = n; rows >= 1; rows--) {
            for (let cols = rows * 2; cols >= 1; cols--) {
                if (cols % 2 === 0) {
                    str += '#';
                } else {
                    str += ' ';
                }
            }
            str += '\n';
        }
        return str;
    }

    if (type.toUpperCase() === "C") {
        for (let rows = 1; rows <= n; rows++) {
            for (let cols = 2; cols < rows * 2; cols++) {
                str += ' ';
            }
            for (let cols = n * 2 + 1; cols >= rows * 2; cols--) {
                if (cols % 2 !== 0) {
                    str += '#';
                } else {
                    str += ' ';
                }
            }
            str += '\n';
        }
        return str;
    }

    if (type.toUpperCase() === "D") {
        for (let rows = n; rows >= 1; rows--) {
            for (let cols = rows * 2; cols > 2; cols--) {
                str += ' ';
            }
            for (let cols = rows * 2; cols <= n * 2 + 1; cols++) {
                if (cols % 2 === 0) {
                    str += '#';
                } else {
                    str += ' ';
                }
            }
            str += '\n';
        }

        return str;
    }
}