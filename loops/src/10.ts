import * as prompts from "prompts";

(async () => {
    const response = await prompts({
        type: "number",
        name: "number",
        message: "Enter a positive number",
    });

    console.log(numberPyramid(response.number));
})();

function numberPyramid(n: number): string {
    let str: string = '';
    let counter: number;

    for (let rows = 0; rows < n; rows++) {
        for (let cols = 1; cols < n - rows; cols++) {
            str += '  ';
        }
        for (let cols = 1; cols <= 1; cols++) {
            str += cols + "   ";
        }
        for (let j = 0; j <= rows; j++) {
            if (j === 0 || rows === 0) {
                counter = 1;
            } else {
                counter = counter * (rows - j + 1) / j;
                if (counter < 10) {
                    str += counter + '   ';
                } else if (counter >= 10 && counter < 100) {
                    str += counter + '  ';
                } else {
                    str += counter + ' ';
                }
            }
        }
        str += '\n';
    }

    return str;
}