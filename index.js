const RuleChecker = require('./config/ruleChecker');

const args = process.argv.slice(2);

let ruleChecker = new RuleChecker(args);
if (ruleChecker.IsValidInput() && ruleChecker.IsActionInput())
{
    console.log("vse ok");
}

