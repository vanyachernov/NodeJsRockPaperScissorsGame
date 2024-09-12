const crypto= require('crypto');

class Computer {
    constructor(moves) {
        this.moves = moves;
    }

    GetMove() {
        const randomIndex = crypto.randomInt(this.moves.length);
        return this.moves[randomIndex];
    }
}

module.exports = Computer;