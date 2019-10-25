const Player = require('./Player');

class Game {
    constructor() {
        this.players = {};
        this.canvasWidth = 35;
        this.canvasHeight = 30;
    }

    addPlayer(id) {
        this.players[id] = new Player();
        return this.players[id];
    }
}

module.exports = Game;
