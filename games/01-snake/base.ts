import { Cell } from "./cell";
import * as chalk from "chalk";
import { Direction } from "./game";

export class Snake {

    rowsSize: number = 10;
    colsSize: number = 20;
    grid: string[] = [];
    head = new Cell(2, 0);
    //tail: Cell[] = [new Cell(0, 0), new Cell(1, 0)];
    apple = new Cell(4, 4);
    score: number = 0;

    createGrid(): void {
        //Lai izvairītos no infinite loop taisot grid
        let tempGrid = [];
        for(let y = 0; y < this.rowsSize; y++){
            tempGrid.push('\n');
            for(let x = 0; x < this.colsSize; x++){
                if(this.head.x === x && this.head.y === y){
                    tempGrid.push(chalk.green('X'));
                } else if(this.apple.x === x && this.apple.y === y){
                    tempGrid.push(chalk.red('O'));
                } else {
                    let obj = `.`;
                    tempGrid.push(obj);
                }
            }
        }
        
        this.grid = tempGrid;
    };

    move(previousTick, currentDirection: Direction){
        if(currentDirection === "Right"){
            this.head.x < this.colsSize-1 ? this.head = new Cell(this.head.x +1, this.head.y) : this.head = new Cell(this.head.x - this.colsSize+1, this.head.y) 
        } else if(currentDirection === "Down"){
            this.head.y < this.rowsSize-1 ? this.head = new Cell(this.head.x, this.head.y + 1) : this.head = new Cell(this.head.x, this.head.y - this.rowsSize+1)
        } else if(currentDirection === "Up"){
            this.head.y > 0 ? this.head = new Cell(this.head.x, this.head.y -1) : this.head = new Cell(this.head.x, this.head.y + this.rowsSize-1)
        } else if(currentDirection === "Left"){
            this.head.x > 0 ? this.head = new Cell(this.head.x -1, this.head.y) : this.head = new Cell(this.head.x + this.colsSize-1, this.head.y)
        }
    }

    eatAnApple(): void {
        if(this.head.x === this.apple.x && this.head.y === this.apple.y){
            let x = Math.floor(Math.random() * this.colsSize);
            let y = Math.floor(Math.random() * this.rowsSize);
            
            if(x === this.head.x && y === this.head.y){
                x = Math.floor(Math.random() * this.colsSize);
                y = Math.floor(Math.random() * this.rowsSize);
            } else {
                this.apple = new Cell(x, y);
            }
        }
    } 
    
    addScore(): void {
        if(this.head.x === this.apple.x && this.head.y === this.apple.y){
            this.score += 10;
        }
    }
}