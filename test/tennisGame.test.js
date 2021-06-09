const TennisGame = require("../main/tennisGame");

test('each player has 0 points at the beginning of the game', () => {
    const game = new TennisGame();
    const points = game.getScore();

    // calculator = new TennisGame()
    // const result = calculator.add("")

    expect(result).toBe(0)
});



