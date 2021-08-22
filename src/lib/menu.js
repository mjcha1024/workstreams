
function prettifyOptions(options) {
    numberedOptions = options.map((option, idx) => [idx + 1, ". ", option].join(""));
    return numberedOptions.join('\n');
}
// console.log(prettifyOptions(['option1', 'option2', 'option3'])); //test

class Menu {
    constructor(prompt, options, responses, rl) {
        this._prompt = prompt;
        this._options = options;
        this.rl = rl;
        this._responses = responses;
        this._responses.makeFunc = key => (() => 'initMenu'); // set the default response function to just reload the menu
    }

    // returns copy of the prompt that will get printed out
    get prompt() {
        const promptArray = [this._prompt, prettifyOptions(this._options)]
        return promptArray.join('\n');
    }

    // responds to input
    respond(input) {
        // console.debug(this)
        if (input === 'c') {
            showMenu('initMenu', this.rl)
        } else {
            const nextMenuName = this._responses.process(input);
            if (nextMenuName === "close") {
                this.rl.close();
            } else {
                showMenu(nextMenuName, this.rl);
            }
        }
    }
}

// fetches the inputs for a menu from a blueprint
function fetchMenuInputs(menuName) {
    const menuDir = '../blueprints/menus';
    const menuPath = [menuDir, '/', menuName, '.js'].join('');
    return require(menuPath);
}
// console.log(fetchMenuInputs("initMenu")); //test

// creates a menu from a blueprint
function makeMenuFromBlueprint(menuName, rl) {
    const menuInputs = {...fetchMenuInputs(menuName), rl};
    const menu = new Menu(...Object.values(menuInputs));
    return menu;
}
// console.log(makeMenuFromBlueprint('initMenu', 'fake_rl')) //test

// shows a dialogue with menu options, and executes response actions based on input
function showMenu(menuName, rl) {
    const menu = makeMenuFromBlueprint(menuName, rl);
    // console.log(menu)
    rl.question(['\n', menu.prompt, '\n', '\n'].join(''), menu.respond.bind(menu));
}

module.exports = { Menu, showMenu };
