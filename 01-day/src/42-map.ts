export { };

function tidyUpString(str: string): string {
  return str
    .trim()
    .toLowerCase()
    .replace("/", "");
}

// You are allowed to edit this function
function capitalise(str: string[]): string[] {
  let newStr = str.map(e => {

    return tidyUpString(e).charAt(0).toUpperCase() + tidyUpString(e).slice(1);

  }

  );

  return newStr;

}

const mentors = ["/Daniel ", "irina ", " Gordon", "ashleigh "];
let mentorsTidy = capitalise(mentors);; // You are allowed to edit this line

console.log(mentorsTidy); // Expected output: ["Daniel", "Irina", "Gordon", "Ashleigh"]
