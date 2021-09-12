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

    console.log(changeMe(response.number, responseType.type));
})();

function changeMe(n: number, ver: string): string {
    let str: string = '';

    if (ver.toUpperCase() === "A") {
        for (let rows = 1; rows <= n; rows++) {
            for (let cols = 1; cols <= n * 2 - rows * 2; cols++) {
                str += ' ';
            }
            for (let cols = 0; cols < rows * 2; cols++) {
                if (cols % 2 === 0) {
                    str += '#';
                } else {
                    str += ' ';
                }
            }

            for (let cols = n * 2 - rows * 2; cols < n * 2 - 2; cols++) {
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

    if (ver.toUpperCase() === "B") {
        for (let rows = n; rows >= 1; rows--) {
            for (let cols = n * 2 - rows * 2; cols >= 1; cols--) {
                str += ' ';
            }

            for (let cols = rows * 2; cols > 0; cols--) {
                if (cols % 2 === 0) {
                    str += '#';
                } else {
                    str += ' ';
                }
            }

            for (let cols = rows * 2; cols > 2; cols--) {
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

    if (ver.toUpperCase() === "C") {
        for (let rows = 1; rows <= n; rows++) {
            for (let cols = 1; cols <= n * 2 - rows * 2; cols++) {
                str += ' ';
            }
            for (let cols = 0; cols < rows * 2; cols++) {
                if (cols % 2 === 0) {
                    str += '#';
                } else {
                    str += ' ';
                }
            }

            for (let cols = n * 2 - rows * 2; cols < n * 2 - 2; cols++) {
                if (cols % 2 === 0) {
                    str += '#';
                } else {
                    str += ' ';
                }
            }

            str += '\n';
        }

        for (let rows = n - 1; rows >= 1; rows--) {
            for (let cols = n * 2 - rows * 2; cols >= 1; cols--) {
                str += ' ';
            }

            for (let cols = rows * 2; cols > 0; cols--) {
                if (cols % 2 === 0) {
                    str += '#';
                } else {
                    str += ' ';
                }
            }

            for (let cols = rows * 2; cols > 2; cols--) {
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

    if (ver.toUpperCase() === "D") {
        for (let rows = 1; rows <= n; rows++) {
            for (let cols = 1; cols <= n * 2 - rows * 2 + 2; cols++) {
                if (cols % 2 !== 0) {
                    str += '#';
                } else {
                    str += ' ';
                }
            }
            for (let cols = 2; cols < rows * 2; cols++) {
                str += ' ';
            }

            for (let cols = n * 2 - rows * 2; cols < n * 2 - 4; cols++) {
                str += ' ';
            }

            if (rows === 1) {
                for (let cols = 3; cols <= n * 2 - rows * 2 + 2; cols++) {
                    if (cols % 2 !== 0) {
                        str += '#';
                    } else {
                        str += ' ';
                    }
                }
            } else {
                for (let cols = 1; cols <= n * 2 - rows * 2 + 2; cols++) {
                    if (cols % 2 !== 0) {
                        str += '#';
                    } else {
                        str += ' ';
                    }
                }
            }

            str += '\n';
        }

        for (let rows = n - 1; rows >= 1; rows--) {
            for (let cols = n * 2 - rows * 2 + 2; cols >= 1; cols--) {
                if (cols % 2 === 0) {
                    str += '#';
                } else {
                    str += ' ';
                }
            }

            for (let cols = rows * 2; cols > 2; cols--) {
                str += ' ';
            }

            for (let cols = rows * 2; cols > 4; cols--) {
                str += ' ';
            }

            if (rows === 1) {
                for (let cols = n * 2; cols > rows * 2; cols--) {
                    if (cols % 2 === 0) {
                        str += '#';
                    } else {
                        str += ' ';
                    }
                }
            } else {
                for (let cols = n * 2 + 2; cols > rows * 2; cols--) {
                    if (cols % 2 === 0) {
                        str += '#';
                    } else {
                        str += ' ';
                    }
                }
            }

            str += '\n';
        }
        return str;
    }

}