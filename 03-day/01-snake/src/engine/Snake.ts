import { Cell } from "./Cell";
import { Direction } from "./Direction";

export class Snake {

  head: Cell = new Cell(2, 0);
  tail: Cell[] = [new Cell(0, 0), new Cell(1, 0)];
  direction: Direction = "Right";
  cellsToGrow: number = 0;

  setDirection(direction: Direction) {
    this.direction = direction;
  }

  move() {
    if (this.cellsToGrow === 0) {
      this.tail.shift();
    } else {
      this.cellsToGrow--;
    }

    this.tail.push(this.head);

    if (this.direction === "Right") {
      this.head = new Cell(this.head.x + 1, this.head.y);
    } else if (this.direction === "Down") {
      this.head = new Cell(this.head.x, this.head.y + 1);
    } else if (this.direction === "Up") {
      this.head = new Cell(this.head.x, this.head.y - 1);
    } else if (this.direction === "Left") {
      this.head = new Cell(this.head.x - 1, this.head.y);
    }

  }

  grow() {
    this.cellsToGrow += 3;
  }

  getHead(): Cell {
    return this.head;
  }

  isSnake(cell: Cell): boolean {
    return false;
  }

  getDirection(): Direction {
    return this.direction;
  }

  getTail(): Cell[] {
    return this.tail;
  }
}
