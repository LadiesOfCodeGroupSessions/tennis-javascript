class TennisGame {



    getScore() {
        let players = []
        let player1 = { "Player" : 1, "Score" : 0 }
        let player2 = { "Player" : 2, "Score" : 0 }

        players[0] =  { player1, player2 }
        const retValue = { "players" : players }

        return JSON.stringify(retValue)
    }
}
module.exports = TennisGame
