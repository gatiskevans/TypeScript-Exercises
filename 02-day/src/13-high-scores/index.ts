/**
 * Manage a game player's High Score list.
 *
 * Your task is to build a high-score component of the classic Frogger game, one of the highest selling and addictive games of all time, and a classic of the arcade era. Your task is to write methods that return the highest score from the list, the last added score and the three highest scores.
 */

class HighScores {
  scores: number[];
  count: number = 0;

  constructor(scores: number[]) {
    this.scores = scores;
  }

  get latest() {
    return this.scores.pop();
  }

  get personalBest() {
    this.scores.sort();
    return this.scores[0];
  }

  get personalTopThree() {
    this.scores.sort(function (a, b) { return b - a });
    const highest = this.scores.filter((e) => {

      if (this.count < 3) {
        this.count++;
        return true;
      } return false;

    });
    return highest;
  }
}

export { HighScores };
