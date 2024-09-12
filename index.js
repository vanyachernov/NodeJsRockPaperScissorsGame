const args = process.argv.slice(2);

if (args.length < 3 || args.length % 2 === 0 || new Set(args).size !== args.length) {
    console.error('Error: You must provide an odd number of unique moves (at least 3)!');
    process.exit();
}