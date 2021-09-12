import * as prompts from "prompts";

(async () => {
  const response = await prompts({
    type: "number",
    name: "number",
    message: "Enter a positive number",
  });

  const responseChar = await prompts({
    type: "text",
    name: "char",
    message: "Enter a character",
  });

  console.log(tree(response.number, responseChar.char));
})();

function tree(n: number, symbol: string): string {
  let str: string = '';
  for (let i = 1; i <= n; i++) {

    str += symbol.repeat(i);
    str += '\n';

  }
  return str;
}