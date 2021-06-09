const TennisGame = require("../main/tennisGame");

test('each player has 0 points at the beginning of the game', () => {
    const game = new TennisGame();
    const points = game.getScore();

   const expectedPoints = {
        players: [
        {
            "Player" : 1,
            "Score" : 0
        },
        {
            "Player" : 2,
            "Score" : 0
        },
    ]
    }

    expect(points).toBe(expectedPoints)
});



