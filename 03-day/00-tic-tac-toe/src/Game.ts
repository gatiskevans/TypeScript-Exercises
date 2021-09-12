export type XO = "X" | "O" | "-";

export class Game {

  cells: XO[] = ["-", "-", "-", "-", "-", "-", "-", "-", "-"];

  getCells(): XO[] {
    return this.cells;
  }

  getTurn(): XO {
    let countEmptyCells = this.cells.filter((cell) => cell === "-").length;
    return countEmptyCells % 2 === 0 ? "O" : "X";
  }

  getWinner(): XO {

    if (this.cells[0] === this.cells[1] && this.cells[1] === this.cells[2] && this.cells[0] !== "-") {
      return this.cells[0];
    }

    if (this.cells[3] === this.cells[4] && this.cells[4] === this.cells[5] && this.cells[3] !== "-") {
      return this.cells[3];
    }

    if (this.cells[6] === this.cells[7] && this.cells[7] === this.cells[8] && this.cells[6] !== "-") {
      return this.cells[6];
    }

    if (this.cells[0] === this.cells[3] && this.cells[3] === this.cells[6] && this.cells[0] !== "-") {
      return this.cells[0];
    }

    if (this.cells[1] === this.cells[4] && this.cells[4] === this.cells[7] && this.cells[1] !== "-") {
      return this.cells[1];
    }

    if (this.cells[2] === this.cells[5] && this.cells[5] === this.cells[8] && this.cells[2] !== "-") {
      return this.cells[2];
    }

    if (this.cells[0] === this.cells[4] && this.cells[4] === this.cells[8] && this.cells[0] !== "-") {
      return this.cells[0];
    }

    if (this.cells[2] === this.cells[4] && this.cells[4] === this.cells[6] && this.cells[2] !== "-") {
      return this.cells[2];
    }

    return "-";
  }

  isTie(): boolean {
    let seeIfTie = this.cells.filter((cell) => cell === "-").length;
    if (seeIfTie === 0 && this.getWinner() !== "X") {
      return true;
    } else {
      return false;
    }
  }

  onClick(i: number): void {
    if (this.cells[i] === '-' && this.getWinner() !== "X" && this.getWinner() !== "O") {
      this.cells[i] = this.getTurn();
    }
  }

  restart(): void {
    this.cells = ["-", "-", "-", "-", "-", "-", "-", "-", "-"];
  }
}
