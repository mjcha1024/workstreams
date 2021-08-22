
const Lazelet = require('../../lib/lazelet.js')

const menuInputs = {
    prompt: 'Hi! What would you like to do?',
    options: [
        'add new workstream',
        'next',
        'reload task queue',
        'all workstreams',
        'exit'
    ],
    responses: new Lazelet({
        1: () => {
            return 'initMenu';
        },
        2: () => {
            return 'initMenu';
        },
        3: () => {
            return 'initMenu';
        },
        4: () => {
            return 'initMenu';
        },
        5: () => {
            return 'close';
        }
    })
}
// console.log(menuInputs); //test

module.exports = menuInputs;
