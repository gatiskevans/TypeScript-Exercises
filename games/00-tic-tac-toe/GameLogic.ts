import * as chalk from "chalk";
export class TicTacToe {

    cells: string = "· · ·\n· · ·\n· · ·\n";

    inputCoordinates(x: number, y: number): string {
        let str = this.cells.split('');

        if (x === 1 && y === 1) {    
            str[0] === '·' ? str[0] = this.getPlayersTurn() : console.log("This field is already occupied! Try again!");
        }
        if (x === 2 && y === 1) {
            str[2] === '·' ? str[2] = this.getPlayersTurn() : console.log("This field is already occupied! Try again!");
        }
        if (x === 3 && y === 1) {
            str[4] === '·' ? str[4] = this.getPlayersTurn() : console.log("This field is already occupied! Try again!");
        }
        if (x === 1 && y === 2) {
            str[6] === '·' ? str[6] = this.getPlayersTurn() : console.log("This field is already occupied! Try again!");
        }
        if (x === 2 && y === 2) {
            str[8] === '·' ? str[8] = this.getPlayersTurn() : console.log("This field is already occupied! Try again!");
        }
        if (x === 3 && y === 2) {
            str[10] === '·' ? str[10] = this.getPlayersTurn() : console.log("This field is already occupied! Try again!");
        }
        if (x === 1 && y === 3) {
            str[12] === '·' ? str[12] = this.getPlayersTurn() : console.log("This field is already occupied! Try again!");
        }
        if (x === 2 && y === 3) {
            str[14] === '·' ? str[14] = this.getPlayersTurn() : console.log("This field is already occupied! Try again!");
        }
        if (x === 3 && y === 3) {
            str[16] === '·' ? str[16] = this.getPlayersTurn() : console.log("This field is already occupied! Try again!");
        }

        return this.cells = str.join('');
    }

    getPlayersTurn(): string {
        let playersTurn = this.cells.split('').filter(cell => cell === "·").length;
        return playersTurn % 2 === 0 ? "O" : "X";
    }

    findWinner(): string {
        if(this.cells.charAt(0) === this.cells.charAt(2) && this.cells.charAt(2) === this.cells.charAt(4) && this.cells.charAt(0) !== "·"){
            return this.cells.charAt(0);
        }
        if(this.cells.charAt(6) === this.cells.charAt(8) && this.cells.charAt(8) === this.cells.charAt(10) && this.cells.charAt(6) !== "·"){
            return this.cells.charAt(6);
        }
        if(this.cells.charAt(12) === this.cells.charAt(14) && this.cells.charAt(14) === this.cells.charAt(16) && this.cells.charAt(12) !== "·"){
            return this.cells.charAt(12);
        }
        if(this.cells.charAt(0) === this.cells.charAt(6) && this.cells.charAt(6) === this.cells.charAt(12) && this.cells.charAt(0) !== "·"){
            return this.cells.charAt(0);
        }
        if(this.cells.charAt(2) === this.cells.charAt(8) && this.cells.charAt(8) === this.cells.charAt(14) && this.cells.charAt(2) !== "·"){
            return this.cells.charAt(2);
        }
        if(this.cells.charAt(4) === this.cells.charAt(10) && this.cells.charAt(10) === this.cells.charAt(16) && this.cells.charAt(4) !== "·"){
            return this.cells.charAt(4);
        }
        if(this.cells.charAt(0) === this.cells.charAt(8) && this.cells.charAt(8) === this.cells.charAt(16) && this.cells.charAt(0) !== "·"){
            return this.cells.charAt(0);
        }
        if(this.cells.charAt(4) === this.cells.charAt(8) && this.cells.charAt(8) === this.cells.charAt(12) && this.cells.charAt(4) !== "·"){
            return this.cells.charAt(4);
        }
        return "·";

    }

    tie(): boolean {
        let checkIfTie = this.cells.split('').filter(cell => cell === '·').length;
        if(checkIfTie === 0 && this.findWinner() !== "X"){
            return true;
        } else {
            return false
        }
    }

    restart(): string {
        return chalk.green(this.cells = "· · ·\n· · ·\n· · ·\n");          
    }
        
}