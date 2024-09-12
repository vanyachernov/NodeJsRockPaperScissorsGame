const Computer = require('./Computer');
const HmacGenerator = require('./HmacGenerator');
const MoveGenerator = require('./MoveGenerator');
const User = require('./User');

class Game {
    constructor(moves) {
        this.moves = moves;
        this.movesGenerator = new MoveGenerator(moves);
        this.hmacGenerator = new HmacGenerator();
        this.movesMachine = new Computer(moves);
        this.userMachine = new User(this);
    }

    Start() {
        const computerMove = this.movesMachine.GetMove();
        const hmac = this.hmacGenerator.Generate(computerMove);

        console.log(`HMAC: ${hmac}`);

        this.PrintMenu();

        let userMove = this.userMachine.GetMove();

        while (userMove === 'help') {
            this.movesGenerator.Print();
            this.PrintMenu();
            userMove = this.userMachine.GetMove();
        }

        if (parseInt(userMove) === 0) {
            console.log('Exit. Goodbye!');
            return;
        }

        const playerMove = this.moves[parseInt(userMove) - 1];
        const result = this.movesGenerator.GetResult(playerMove, computerMove);

        console.log(`Your move: ${playerMove}`);
        console.log(`Computer move: ${computerMove}`);
        console.log(`Result: ${result}`);
        console.log(`HMAC Key: ${this.hmacGenerator.GetHmac()}`);
    }

    PrintMenu() {
        console.log('Menu:');
        for (let k = 0; k < this.moves.length; k++) {
            console.log(`${k + 1} - ${this.moves[k]}`);
        }
        console.log('0 - Exit');
        console.log('Type "help" to see the help table.');
    }

    IsValidInput(input) {
        const validChoices = [...Array(this.moves.length).keys()].map(i => (i + 1).toString()).concat(['0', 'help']);
        return validChoices.includes(input);
    }
}

module.exports = Game;