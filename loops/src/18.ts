import * as prompts from "prompts";

(async () => {
    const response = await prompts({
        type: "number",
        name: "number",
        message: "Enter the number:",
    });

    console.log(timesTwo(response.number));
})();

function timesTwo(n: number): string {
    let str: string = '';
    for (let rows = Math.pow(2, n); rows > 1; rows /= 2) {
        for (let cols = Math.pow(2, n) / rows; cols >= 1; cols /= 2) {
            if (cols >= 10 && cols < 100) {
                str += `    ${cols}  `;
            } else if (cols >= 100 && cols < 1000) {
                str += `   ${cols}  `;
            } else if (cols >= 1000 && cols < 10000) {
                str += `  ${cols}  `;
            } else if (cols >= 10000 && cols < 100000) {
                str += ` ${cols}  `;
            } else if (cols >= 100000) {
                str += `${cols}  `;
            } else {
                str += `     ${cols}  `;
            }
        }
        str += '\n';
    }
    return str;
}