import { Game } from "./Game";

describe("Tic-Tac-Toe", () => {
  it("should start with blank state", () => {
    const game = new Game();

    expect(game.getCells()).toEqual([
      "-", "-", "-",
      "-", "-", "-",
      "-", "-", "-"
    ]);
    expect(game.getTurn()).toBe("X");
    expect(game.getWinner()).toBe("-");
    expect(game.isTie()).toBe(false);
  });

  it("should be able to make a move", () => {
    const game = new Game();

    game.onClick(0);

    expect(game.getCells()).toEqual([
      "X", "-", "-",
      "-", "-", "-",
      "-", "-", "-"
    ]);
    expect(game.getTurn()).toBe("O");
    expect(game.getWinner()).toBe("-");
    expect(game.isTie()).toBe(false);
  });

  it("both players should be able to make a move", () => {
    const game = new Game();

    game.onClick(0);
    game.onClick(1);
    game.onClick(2);

    expect(game.getCells()).toEqual([
      "X", "O", "X",
      "-", "-", "-",
      "-", "-", "-"
    ]);
    expect(game.getTurn()).toBe("O");
    expect(game.getWinner()).toBe("-");
    expect(game.isTie()).toBe(false);
  });

  it("should not be able to place a mark in a taken cell", () => {
    const game = new Game();

    game.onClick(0);
    game.onClick(0);

    expect(game.getCells()).toEqual([
      "X", "-", "-",
      "-", "-", "-",
      "-", "-", "-"
    ]);
    expect(game.getTurn()).toBe("O");
    expect(game.getWinner()).toBe("-");
    expect(game.isTie()).toBe(false);
  });

  it("should win if first horizontal line is filled by the same mark", () => {
    const game = new Game();

    game.onClick(0);
    game.onClick(4);
    game.onClick(1);
    game.onClick(5);
    game.onClick(2);


    expect(game.getCells()).toEqual([
      "X", "X", "X",
      "-", "O", "O",
      "-", "-", "-"
    ]);
    expect(game.getWinner()).toBe("X");
    expect(game.isTie()).toBe(false);
  });

  it("should win if second horizontal line is filled by the same mark", () => {
    const game = new Game();

    game.onClick(3);
    game.onClick(0);
    game.onClick(4);
    game.onClick(1);
    game.onClick(5);


    expect(game.getCells()).toEqual([
      "O", "O", "-",
      "X", "X", "X",
      "-", "-", "-"
    ]);
    expect(game.getWinner()).toBe("X");
    expect(game.isTie()).toBe(false);
  });

  it("should win if third horizontal line is filled by the same mark", () => {
    const game = new Game();

    game.onClick(6);
    game.onClick(0);
    game.onClick(7);
    game.onClick(5);
    game.onClick(8);


    expect(game.getCells()).toEqual([
      "O", "-", "-",
      "-", "-", "O",
      "X", "X", "X"
    ]);
    expect(game.getWinner()).toBe("X");
    expect(game.isTie()).toBe(false);
  });

  it("should win if first vertical line is filled by the same mark", () => {
    const game = new Game();

    game.onClick(0);
    game.onClick(4);
    game.onClick(3);
    game.onClick(5);
    game.onClick(6);


    expect(game.getCells()).toEqual([
      "X", "-", "-",
      "X", "O", "O",
      "X", "-", "-"
    ]);
    expect(game.getWinner()).toBe("X");
    expect(game.isTie()).toBe(false);
  });

  it("should win if second vertical line is filled by the same mark", () => {
    const game = new Game();

    game.onClick(1);
    game.onClick(0);
    game.onClick(4);
    game.onClick(2);
    game.onClick(7);


    expect(game.getCells()).toEqual([
      "O", "X", "O",
      "-", "X", "-",
      "-", "X", "-"
    ]);
    expect(game.getWinner()).toBe("X");
    expect(game.isTie()).toBe(false);
  });

  it("should win if third vertical line is filled by the same mark", () => {
    const game = new Game();

    game.onClick(2);
    game.onClick(4);
    game.onClick(5);
    game.onClick(0);
    game.onClick(8);


    expect(game.getCells()).toEqual([
      "O", "-", "X",
      "-", "O", "X",
      "-", "-", "X"
    ]);
    expect(game.getWinner()).toBe("X");
    expect(game.isTie()).toBe(false);
  });

  it("should win if top to right diagonal line is filled by the same mark", () => {
    const game = new Game();

    game.onClick(0);
    game.onClick(1);
    game.onClick(4);
    game.onClick(5);
    game.onClick(8);


    expect(game.getCells()).toEqual([
      "X", "O", "-",
      "-", "X", "O",
      "-", "-", "X"
    ]);
    expect(game.getWinner()).toBe("X");
    expect(game.isTie()).toBe(false);
  });

  it("should win if bottom to right diagonal line is filled by the same mark", () => {
    const game = new Game();

    game.onClick(6);
    game.onClick(0);
    game.onClick(4);
    game.onClick(1);
    game.onClick(2);


    expect(game.getCells()).toEqual([
      "O", "O", "X",
      "-", "X", "-",
      "X", "-", "-"
    ]);
    expect(game.getWinner()).toBe("X");
    expect(game.isTie()).toBe(false);
  });

  it("should be tie if all of the fields are occupied and noone has won", () => {
    const game = new Game();

    game.onClick(0);
    game.onClick(1);
    game.onClick(2);
    game.onClick(3);
    game.onClick(5);
    game.onClick(4);
    game.onClick(7);
    game.onClick(8);
    game.onClick(6);

    expect(game.getCells()).toEqual([
      "X", "O", "X",
      "O", "O", "X",
      "X", "X", "O"
    ]);
    expect(game.isTie()).toBe(true);
  });

});
