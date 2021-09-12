import * as prompts from "prompts";

(async () => {
  const response = await prompts({
    type: "text",
    name: "name",
    message: "What is your name?",
  });

  console.log(`Hi, ${response.name}! Nice to see you here 😊`);
})();
