import * as prompts from "prompts";

(async () => {
    const response = await prompts({
        type: "number",
        name: "number",
        message: "Enter a positive number",
    });

    console.log(drawXPattern(response.number));
})();

function drawXPattern(n: number): string {

    let str: string = '';

    for (let rows = 0; rows <= n + 1; rows++) {
        for (let cols = 0; cols <= n + 1; cols++) {

            if (cols === rows || cols + rows === n + 1) {
                str += '*';
            } else {
                str += '.'
            }
        }
        str += '\n';
    }

    return str;

}