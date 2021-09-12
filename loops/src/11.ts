import * as prompts from "prompts";

(async () => {
  const response = await prompts({
    type: "number",
    name: "number",
    message: "Enter a positive number",
  });

  console.log(treeWithCharCode(response.number));
})();

function treeWithCharCode(n: number): string {

  let str: string = '';

  for (let rows = 0; rows < n; rows++) {
    for (let cols = 0; cols <= rows; cols++) {
      str += String.fromCharCode(65 + rows);
    }
    str += '\n';
  }

  return str;

}