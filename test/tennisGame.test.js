const TennisGame = require("../main/tennisGame");

test('input empty string and return 0', () => {
    calculator = new TennisGame()
    const result = calculator.add("")

    expect(result).toBe(0)
});



