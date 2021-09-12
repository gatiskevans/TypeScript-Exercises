import * as prompts from "prompts";

(async () => {
    const number = await prompts({
        type: "number",
        name: "number",
        message: "Enter the number",
    });

    const direction = await prompts({
        type: "text",
        name: "direction",
        message: "select direction: (right/left)",
        validate: value => value.toUpperCase() === "RIGHT" || value.toUpperCase() === "LEFT"
    });

    const empty = await prompts({
        type: "text",
        name: "empty",
        message: "Is it empty? (y/n)",
        validate: value => value.toUpperCase() === "Y" || value.toUpperCase() === "N"
    });

    console.log(tiltedPattern(number.number, direction.direction, empty.empty));
})();

function tiltedPattern(n: number, dir: string, empty: string): string {
    let str: string = '';
    if (dir.toUpperCase() === "RIGHT" && empty.toUpperCase() === "N") {
        for (let rows = 1; rows <= n; rows++) {
            for (let cols = 1; cols <= n - rows; cols++) {
                str += ' ';
            }
            for (let star = 1; star <= n; star++) {
                str += '*';
            }
            str += '\n';
        }
        return str;
    }

    if (dir.toUpperCase() === "LEFT" && empty.toUpperCase() === "N") {
        for (let rows = n; rows >= 1; rows--) {
            for (let cols = n - rows; cols >= 1; cols--) {
                str += ' ';
            }
            for (let star = n; star >= 1; star--) {
                str += '*';
            }
            str += '\n';
        }
        return str;
    }

    if (dir.toUpperCase() === "RIGHT" && empty.toUpperCase() === "Y") {
        for (let rows = 1; rows <= n; rows++) {
            for (let cols = 1; cols <= n - rows; cols++) {
                str += ' ';
            }
            for (let star = 1; star <= n; star++) {
                if (rows === 1 || rows === n || star === 1 || star === n) {
                    str += '*';
                } else {
                    str += ' ';
                }
            }
            str += '\n';
        }
        return str;
    }

    if (dir.toUpperCase() === "LEFT" && empty.toUpperCase() === "Y") {
        for (let rows = n; rows >= 1; rows--) {
            for (let cols = n - rows; cols >= 1; cols--) {
                str += ' ';
            }
            for (let star = n; star >= 1; star--) {
                if (rows === 1 || rows === n || star === 1 || star === n) {
                    str += '*';
                } else {
                    str += ' ';
                }
            }
            str += '\n';
        }
        return str;
    }
}