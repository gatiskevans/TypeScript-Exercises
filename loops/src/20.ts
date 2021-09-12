import * as prompts from "prompts";

(async () => {
  const response = await prompts({
    type: "number",
    name: "number",
    message: "Enter a positive number",
  });

  console.log(numberAndStarTriangle(response.number));
})();

function numberAndStarTriangle(n: number): string {
    let str: string = '';
    for(let rows = n; rows >= 1; rows--){
        for(let cols = 1; cols <= rows; cols++){
            for(let j = cols; j <= cols; j++){
                str += cols;
            }
            for(let star = cols; star <= (cols===rows ? cols-1 : cols); star++){
                str += ' * ';
            }
        }
        
        str += '\n';
    }
    return str;
}