import * as prompts from "prompts";

(async () => {
    const response = await prompts({
        type: "number",
        name: "number",
        message: "Enter the number:",
    });

    const responseDir = await prompts({
        type: "text",
        name: "direction",
        message: "Select direction: (R/L)",
        validate: value => value.toUpperCase() === "L" || value.toUpperCase() === "R"
    });

    console.log(arrowPointing(response.number, responseDir.direction.toLowerCase()));
})();

function arrowPointing(n: number, dir: string): string {
    let str: string = '';

    if (dir.toUpperCase() === "R") {
        for (let rows = 0; rows < n; rows++) {
            for (let cols = 0; cols < rows * 2; cols++) {
                str += ' ';
            }
            for (let cols = n - rows; cols > 0; cols--) {
                str += '*';
            }
            str += '\n';
        }

        for (let rows = n - 1; rows > 0; rows--) {
            for (let cols = 2; cols < rows * 2; cols++) {
                str += ' ';
            }
            for (let cols = rows - 1; cols < n; cols++) {
                str += '*';
            }
            str += '\n';
        }

        return str;
    }

    if (dir.toUpperCase() === 'L') {
        for (let rows = 1; rows <= n; rows++) {
            for (let cols = 1; cols <= n - rows; cols++) {
                str += ' ';
            }
            for (let cols = n - rows; cols >= 0; cols--) {
                str += '*';
            }
            str += '\n';
        }

        for (let rows = 1; rows < n; rows++) {
            for (let cols = 1; cols <= rows; cols++) {
                str += ' ';
            }
            for (let cols = 0; cols <= rows; cols++) {
                str += '*';
            }
            str += '\n';
        }
        return str;
    }

}