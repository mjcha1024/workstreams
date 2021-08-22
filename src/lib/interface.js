const readline = require('readline');
const { showMenu } = require('./menu.js')

// starts the user interface on the initial menu
function startInterface() {
    return new Promise((resolve, reject) => {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        rl.on('close', () => {
            console.log('\nBye!');
            // process.exit(0);
            resolve();
        });
        showMenu('initMenu', rl);
    });
}
// startInterface(); //test

module.exports = { startInterface }
