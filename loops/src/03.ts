import * as prompts from "prompts";

(async () => {
    const response = await prompts({
        type: "number",
        name: "number",
        message: "Enter a positive number",
    });

    console.log(squareBox(response.number));
})();

function squareBox(n: number): string {

    let str: string = '';

    for (let rows = 0; rows < n; rows++) {
        for (let cols = 0; cols < n; cols++) {
            if (rows === 0 || cols === 0 || rows === n - 1 || cols === n - 1) {
                str += "*";
            } else {
                str += " ";
            }
        }

        str += "\n";

    }

    return str;
}