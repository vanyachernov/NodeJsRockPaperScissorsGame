const RuleChecker = require('./config/RuleChecker');
const Game = require('./config/Game');

const args = process.argv.slice(2);

let ruleChecker = new RuleChecker(args);

if (ruleChecker.IsActionInput())
{
    const game = new Game(args);
    
    game.Start();
}