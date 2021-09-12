import * as prompts from "prompts";

(async () => {
  const response = await prompts({
    type: "number",
    name: "number",
    message: "Enter a positive number",
  });

  console.log(rectangleWithSpace(response.number));
})();

function rectangleWithSpace(n: number): string {
  let str: string = '';
  for (let rows = 0; rows < n; rows++) {
    for (let cols = 0; cols < n; cols++) {
      str += "* ";
    }
    str += "\n";
  }
  return str;
}