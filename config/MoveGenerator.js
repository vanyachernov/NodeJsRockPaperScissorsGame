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
                    const diff = (j - i + movesLength) % movesLength;
                    table[i][j] = (diff <= half && diff !== 0) ? 'Win' : 'Lose';
                }
            }
        }

        return table;
    }

    Print() {
        const table = new Table({
            head: ['↓PC/User→'].concat(this.moves),
            style: { head: ['cyan'] },
        });

        for (let i = 0; i < this.moves.length; i++) {
            const row = [this.moves[i]];
            for (let j = 0; j < this.moves.length; j++) {
                row.push(this.rulesTable[j][i]);
            }
            table.push(row);
        }

        console.log('Help table:');
        console.log(table.toString());
    }


    GetResult(playerMove, computerMove) {
        const userIndex = this.moves.indexOf(playerMove);
        const compIndex = this.moves.indexOf(computerMove);
        return this.rulesTable[userIndex][compIndex];
    }
}

module.exports = MoveGenerator;