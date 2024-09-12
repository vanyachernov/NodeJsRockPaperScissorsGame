class User {
    constructor(engine) {
        this.gameEngine = engine;
    }

    GetMove() {
        let input = prompt('Enter your choice: ');
        while (!this.gameEngine.IsValidInput(input)) {
            console.log('Invalid input. Please, try again!');
            input = prompt('Enter your choice: ');
        }
        return input;
    }
}

module.exports = User;