class MoveGenerator {
    constructor(moves) {
        this.moves = moves;
        this.rulesTable = this.Generate();
    }

    Generate() {
        const movesLength = this.moves.length;
        const table = [];

        for (let i = 0; i < movesLength; i++) {
            table[i] = [];

            for (let j = 0; j < movesLength; j++) {
                if (i === j) {
                    table[i][j] = 'Draw';
                } else {
                    const half = Math.floor(movesLength / 2);
                    const diff = (j - i + movesLength) % movesLength;
                    table[i][j] = (diff <= half && diff !== 0) ? 'Win' : "Lose";
                }
            }
        }

        return table;
    }
}

module.exports = MoveGenerator;