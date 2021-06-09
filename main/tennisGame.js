class TennisGame {
  getScore() {
    let players = [];
    let player1 = { Name: "Ben", Score: 0 };
    let player2 = { Name: "Maria", Score: 0 };

    players[0] = { player1, player2 };
    const retValue = { players: players };

    return retValue;
  }
}
module.exports = TennisGame;
