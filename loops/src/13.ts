import * as prompts from "prompts";

(async () => {
    const response = await prompts({
        type: "number",
        name: "number",
        message: "Enter a positive number",
    });

    console.log(housePattern(response.number));
})();

function housePattern(n: number): string {
    let str: string = '';

    for (let rows = 1; rows <= n; rows++) {
        if (rows <= Math.ceil(n / 2)) {
            for (let cols = rows; cols < Math.round(n / 2); cols++) {
                str += '-';
            }
            if (n % 2 === 0) {
                for (let stars = n; stars < n + rows + rows; stars++) {
                    str += '*';
                }
            } else {
                for (let stars = n + 1; stars < n + rows + rows; stars++) {
                    str += '*';
                }
            }
            for (let cols = rows; cols < Math.ceil(n / 2); cols++) {
                str += '-';
            }
        } else {
            for (let cols = 1; cols <= n; cols++) {
                if (cols === 1 || cols === n) {
                    str += "|"
                } else {
                    str += '*';
                }
            }
        }
        str += '\n';
    }

    return str;
}