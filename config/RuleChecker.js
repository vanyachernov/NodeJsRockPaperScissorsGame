class RuleChecker {
    constructor(moves) {
        this.moves = moves;
    }
    
    IsActionInput() {
        const moves = this.moves;
        
        if (moves.length < 3 || moves.length % 2 === 0 || new Set(moves).size !== moves.length) {
            console.error('\nGame: You must provide an odd number of unique moves (at least 3)!');
            console.error('Try again! Example: node index rock paper scissors\n');
            return false;
        }
        
        return true;
    }
}

module.exports = RuleChecker;