
class Game {
    constructor(){
        this.players = [];
    }

    startGame(player1Name, player2Name){
        this.players.push(new Player(player1Name))
        this.players.push(new Player(player2Name))
    }
}

module.exports = Game;