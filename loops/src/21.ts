import * as prompts from "prompts";

(async () => {
  const response = await prompts({
    type: "number",
    name: "number",
    message: "Enter a positive number",
  });

  console.log(branches(response.number));
})();

function branches(n: number): string {
    let str: string = '';
    for(let rows = 1; rows <= n-2; rows++){
        for(let cols  = 2; cols < n; cols++){
            if(rows % 2 === 0){
                str += '-';
            } else {
                str += '*';
            }
        }
        for(let cols = 0; cols <= 0; cols++){
            str += '\\';
        }
        for(let cols = 0; cols <= 0; cols++){
            str += ' ';
        }
        for(let cols = 0; cols <= 0; cols++){
            str += '/';
        }
        for(let cols  = 2; cols < n; cols++){
            if(rows % 2 === 0){
                str += '-';
            } else {
                str += '*';
            }
        }
        str += '\n';
    }

    for(let middle = 0; middle <= 0; middle++){
        for(let middle = 1; middle < 2*n; middle++){
            if(middle === n){
                str += '@';
            } else {
                str += ' ';
            }
        }
        str += '\n';
    }

    for(let rows = 1; rows <= n-2; rows++){
        for(let cols  = 2; cols < n; cols++){
            if(rows % 2 === 0){
                str += '-';
            } else {
                str += '*';
            }
        }
        for(let cols = 0; cols <= 0; cols++){
            str += '/';
        }
        for(let cols = 0; cols <= 0; cols++){
            str += ' ';
        }
        for(let cols = 0; cols <= 0; cols++){
            str += '\\';
        }
        for(let cols  = 2; cols < n; cols++){
            if(rows % 2 === 0){
                str += '-';
            } else {
                str += '*';
            }
        }
        str += '\n';
    }

    return str;
}