import * as chalk from "chalk";
import * as prompts from "prompts";
import { TicTacToe } from "./GameLogic";
let newGame = new TicTacToe();

interface Coordinates {
  x: number;
  y: number;
}

let coordinates: Coordinates | undefined;

// end() can be called if you want to end the game and exit
export const game = async (end: () => void) => {
  console.clear();    //nodzēš termināli. Tas pats kas komanda clear vai cls uz windows terminal
  console.log(chalk.green(`x=${coordinates?.x} & y=${coordinates?.y}`));

  newGame.inputCoordinates(coordinates?.x, coordinates?.y);

  console.log(chalk.bold.green(newGame.cells));

  if (newGame.findWinner() !== "·") {
    console.log(chalk.green(`\n${newGame.findWinner()} player won!\n`));

    const replay = await prompts(
      {
        type: "text",
        name: "replay",
        message: "Do you want to play another game? (Y/N)",
        validate: (value: string) => {
          if (value.toUpperCase() === "Y") {
            console.clear();
            console.log(chalk.green(`x=undefined & y=undefined`));
            console.log(newGame.restart());
            return true;
          } else if (value.toUpperCase() === "N") {
            end();
          }
        }
      }
    );
    console.log(replay.replay);
  }

  if (newGame.tie()) {
    console.log(chalk.blue(`It's a tie!`));

    const replay = await prompts(
      {
        type: "text",
        name: "replay",
        message: "Do you want to play another game? (Y/N)",
        validate: (value: string) => {
          if (value.toUpperCase() === "Y") {
            console.clear();
            console.log(chalk.green(`x=undefined & y=undefined`));
            console.log(newGame.restart());
            return true;
          } else if (value.toUpperCase() === "N") {
            end();
          }
        }
      }
    );
    console.log(replay.replay);

  }

  const response = await prompts([
    {
      type: "number",
      name: "x",
      message: "Enter coordinate (1-3) on x axis",
      validate: (value: number) => value <= 3 && value > 0
    },
    {
      type: "number",
      name: "y",
      message: "Enter coordinate (1-3) on y axis",
      validate: (value: number) => value <= 3 && value > 0
    },
  ]);

  // ... is spread syntax, read more here - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
  coordinates = { ...response };
};
