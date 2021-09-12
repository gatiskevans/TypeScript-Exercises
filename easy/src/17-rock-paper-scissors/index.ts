/**
 * Abigail and Benson are playing Rock, Paper, Scissors.
 * Each game is represented by an array of length 2, 
 * where the first element represents what Abigail played and the second element represents what Benson played.
 * Given a sequence of games, determine who wins the most number of matches and output the winners name. If they tie, output "Tie!".
 * R stands for Rock
 * P stands for Paper
 * S stands for Scissors
 */

function rockPaperScissors(games: string[][]): string {
    let abigailScore: number = 0;
    let bensonScore: number = 0;
    for (let i = 0; i < games.length; i++) {
        const abigail = games[i][0];
        const benson = games[i][1];

        if (abigail === "R" && benson === "S" || abigail === "S" && benson === "P" || abigail === "P" && benson === "R") {
            abigailScore++;
        } else if (benson === "R" && abigail === "S" || benson === "S" && abigail === "P" || benson === "P" && abigail === "R") {
            bensonScore++;
        }

    }

    if(abigailScore > bensonScore){
        return `Abigail`
    } else if(bensonScore > abigailScore){
        return `Benson`
    } else {
        return `Tie!`
    }

}

export { rockPaperScissors };