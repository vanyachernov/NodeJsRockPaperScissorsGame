const User = require('./User');
const Computer = require('./Computer');
const HmacGenerator = require('./HmacGenerator');
const MoveGenerator = require('./MoveGenerator');

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
        
        const hmac = this.hmacGenerator.GenerateHmac(computerMove);
        
        console.log(`\nHMAC: ${hmac}`);

        this.PrintMenu();

        let userMove = this.userMachine.GetMove();

        while (userMove === 'help') {
            this.movesGenerator.Print();
            this.PrintMenu();
            userMove = this.userMachine.GetMove();
        }

        if (parseInt(userMove) === 0) {
            console.log('Game: Exit. Goodbye!');
            return;
        }

        const playerMove = this.moves[parseInt(userMove) - 1];
        const result = this.movesGenerator.GetResult(playerMove, computerMove);

        console.log(`\nYour move: ${playerMove}`);
        console.log(`Computer move: ${computerMove}`);
        console.log(`You ${result.toString().toLowerCase()}!\n`);
        console.log(`HMAC key: ${this.hmacGenerator.GetKey()}`);
        console.log(`To check the authenticity of the HMAC, follow this link: https://wtools.io/ru/generate-hmac-hash\n`);
    }


    PrintMenu() {
        console.log('\nMenu:');
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