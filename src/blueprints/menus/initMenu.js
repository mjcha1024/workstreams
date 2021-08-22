
const Lazelet = require('../../lib/lazelet.js')

const menuInputs = {
    prompt: 'test prompt',
    options: [
        'test option 1',
        'test option 2',
        'test option 3'
    ],
    responses: new Lazelet({
        1: () => {
            console.log('option 1 chosen!');
            return 'initMenu';
        },
        2: () => {
            console.log('option 2 chosen!');
            return 'initMenu';
        },
        3: () => {
            console.log('option 3 chosen!');
            return 'initMenu';
        }
    })
}
// console.log(menuInputs); //test

module.exports = menuInputs;
