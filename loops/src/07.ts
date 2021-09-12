import * as prompts from "prompts";

(async () => {
    const response = await prompts({
        type: "number",
        name: "number",
        message: "Enter a positive number",
    });

    console.log(patternDraw(response.number));
})();

function patternDraw(n: number): string {

    let str: string = '';

    for (let rows = 1; rows <= 1; rows++) {
        for(let cols = 1; cols <= 1; cols++){
            str += '+ ';
        }
        for(let cols = 0; cols < n-2; cols++){
            str += '- ';
        }
        for(let cols = 1; cols <= 1; cols++){
            str += '+ ';
        }
        str += '\n';
    }

    for(let rows = 1; rows < n-1; rows++){
        for(let cols = 1; cols <= 1; cols++){
            str += '| ';
        }
        for(let cols = 0; cols < n-2; cols++){
            str += '- ';
        }
        for(let cols = 1; cols <= 1; cols++){
            str += '| ';
        }
        str += '\n';
    }

    for (let rows = 1; rows <= 1; rows++) {
        for(let cols = 1; cols <= 1; cols++){
            str += '+ ';
        }
        for(let cols = 0; cols < n-2; cols++){
            str += '- ';
        }
        for(let cols = 1; cols <= 1; cols++){
            str += '+ ';
        }
        str += '\n';
    }

    return str;
}