import * as prompts from "prompts";

(async () => {
  const response = await prompts({
    type: "number",
    name: "number",
    message: "Enter the number",
  });

  const responseText = await prompts({
    type: "text",
    name: "text",
    message: "What should we print on it?",
  });

  console.log(heart(response.number, responseText.text));
})();

function heart(n: number, tex: string): string{
    let str: string = '';

    for(let rows = 2; rows >= 0; rows--){
        for(let cols = 1; cols <= rows; cols++){
            str += ' ';
        }
        for(let cols = 1; cols <= n/2 - 2 * rows; cols++){
            str += '*';
        }
        for(let cols = 0; cols <= rows * 2; cols++){
            str += ' ';
        }
        for(let cols = 1; cols <= n/2 - 2 * rows; cols++){
            str += '*';
        }
        str += '\n';
    }

    for(let middle = 0; middle <= 0; middle++){
        if(tex.trim().length === 0){
          for(let cols = 1; cols <= n; cols++){
                str += '*';
            }
        } else {
            tex = tex.trim();
            const subtracted = n - tex.length;
            for(let cols = 1; cols <= (subtracted % 2 === 0 ? subtracted/2 : subtracted/2 + 1); cols++){
                str += '*';
            }
            for(let text = 0; text <= 0; text++){
                str += tex.toUpperCase();
            }
            for(let cols = 1; cols <= (n % 2 === 0 ? subtracted/2 + 1: subtracted/2); cols++){
                str += '*';
            }
        }

        str += '\n';
    }

    for(let rows = 1; rows <= (n % 2 === 0 ? n/2 + 1: n/2); rows++){
        for(let cols = 0; cols < rows; cols++){
            str += ' ';
        }
        for(let cols = 1; cols <= (n%2 === 0 ? n-rows*2+1 : n-rows*2); cols++){
            str += '*';
        }
        str += '\n';
    }
    return str;
}