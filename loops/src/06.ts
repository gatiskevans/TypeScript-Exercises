import * as prompts from "prompts";

(async () => {
    const response = await prompts({
        type: "number",
        name: "number",
        message: "Enter a positive number",
    });

    console.log(dotsAndStars(response.number));
})();

function dotsAndStars(n: number): string {

    let str: string = '';

    for (let rows = 0; rows <= n; rows++) {

        for (let cols = 1; cols <= rows; cols++) {
            str += '.';
        }
        for(let cols = n-rows; cols >= 0; cols--){
            str += '*';
        }

        str += '\n';
    }

    return str;
}