const TennisGame = require("../main/tennisGame");

test("each player has 0 points at the beginning of the game", () => {
  const game = new TennisGame();
  const points = game.getScore();

  const expectedPoints = {
    players: [
      {
        player1: {
          Name: "Ben",
          Score: 0,
        },
      },
      {
        player2: {
          Name: "Maria",
          Score: 0,
        },
      },
    ],
  };

  expect(points).toBe(expectedPoints);
});
