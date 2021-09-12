import * as prompts from "prompts";

(async () => {
    const response = await prompts({
        type: "number",
        name: "number",
        message: "Enter the size:",
    });

    const responseType = await prompts({
        type: "text",
        name: "type",
        message: "Select the type: (a/b/c/d)",
        validate: value => value.toUpperCase() === "A" || value.toUpperCase() === "B" || value.toUpperCase() === "C" || value.toUpperCase() === "D"
    });

    console.log(numberTriangle(response.number, responseType.type));
})();

function numberTriangle(n: number, ver: string): string {
    let str: string = '';
    if (ver.toUpperCase() === "A") {
        for (let rows = 1; rows <= n; rows++) {
            for (let cols = 1; cols <= rows; cols++) {
                str += cols + " ";
            }
            str += '\n';
        }

        return str;
    }

    if (ver.toUpperCase() === "B") {
        for (let rows = n; rows >= 1; rows--) {
            for (let cols = rows; cols < n; cols++) {
                str += '  ';
            }
            for (let cols = 1; cols <= rows; cols++) {
                str += cols + " ";
            }
            str += '\n';
        }
        return str;
    }

    if (ver.toUpperCase() === "C") {
        for (let rows = n; rows >= 1; rows--) {
            for (let cols = n - rows; cols < n - 1; cols++) {
                str += '  ';
            }
            for (let cols = 1; cols <= n - rows + 1; cols++) {
                str += cols + ' ';
            }
            str += '\n';
        }
        return str;
    }

    if (ver.toUpperCase() === "D") {
        for (let rows = n; rows >= 1; rows--) {
            for (let cols = rows; cols >= 1; cols--) {
                str += cols + ' ';
            }
            str += '\n';
        }
        return str;
    }
}