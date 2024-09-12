const RuleChecker = require('./config/RuleChecker');
const MoveGenerator = require('./config/MoveGenerator');

const args = process.argv.slice(2);

let ruleChecker = new RuleChecker(args);

if (ruleChecker.IsValidInput() && ruleChecker.IsActionInput())
{
    console.log("All is correct");
}

// So far.

const moves = ['rock', 'paper', 'lizard'];

const generator = new MoveGenerator(moves);

generator.Print();