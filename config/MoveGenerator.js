const Table = require('cli-table3');

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
                    const diff = (i - j + movesLength) % movesLength;
                    table[i][j] = (diff <= half && diff !== 0) ? 'Win' : "Lose";
                }
            }
        }

        return table;
    }

    Print() {
        const table = new Table({
            head: ['↓User/PC→'].concat(this.moves),
            style: { head: ['cyan'] },
        });

        for (let i = 0; i < this.moves.length; i++) {
            table.push([this.moves[i]].concat(this.rulesTable[i]));
        }

        console.log('Help table:');
        console.log(table.toString());
    }

    GetResult(playerMove, computerMove) {
        const playerIndex = this.moves.indexOf(playerMove);
        const computerIndex = this.moves.indexOf(computerMove);
        return this.rulesTable[playerIndex][computerIndex];
    }
}

module.exports = MoveGenerator;