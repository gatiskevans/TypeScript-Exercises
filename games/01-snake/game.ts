import * as chalk from "chalk";
import {Snake} from "./base";

export type Direction = "Up" | "Right" | "Left" | "Down";
export const FRAMES_PER_SECOND = 2;

// define needed variables here so that they are available between redraws
let newGame = new Snake();

// function will be called every (1000 / FRAMES_PER_SECOND) seconds
export const draw = (direction: Direction) => {
  console.clear();
  console.log(
    `Current direction: ${chalk.blue(direction)} (${chalk.gray(
      "try pressing arrows"
    )})`
  );
  let previous = newGame.head;
  console.log(chalk.red(`Score: ${newGame.score}`));
  newGame.createGrid();
  newGame.move(previous, direction);
  console.log(newGame.grid.join(' '));
  console.log(previous.x);
  console.log(newGame.head.x);
  newGame.addScore();
  newGame.eatAnApple();
};
