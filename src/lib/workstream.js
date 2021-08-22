
const { saveData } = require('./utilities.js');

// workstreams are, recursively, a conglomeration of other worksteams
class Workstream {
    constructor(attributes, data) {
        this.attributes = attributes;    // attributes are fixed and should only be edited manually in the file
        this.data = data;   // data is editable by ui
    }

    get next() {
        return this.members[0];
    }

    get dependencies() {
        this.attributes.findDependencies(this.data);
    }

    updateData(key, newData) {
        this.data[key] = newData;
        saveData(this.data, ['./src/workstreams/active', this.attributes.id, 'data.js'].join('/'));
    }
}

function getWorkstreamPath(name) {
    return ['../workstreams/active/', name].join('');
}

function makeWorkstreamFromFile(path) {
    attributes = require([path, 'attributes.js'].join('/'));
    data = require([path, 'data.js'].join('/'));
    return new Workstream(attributes, data);
}
// console.log(makeWorkstreamFromFile(getWorkstreamPath('all_tasks'))); //test

function makeWorkstreamFetcher() {
    const cache = {};
    function fetch(workstreamName) {
        const workstream = cache[workstreamName] || makeWorkstreamFromFile(getWorkstreamPath(workstreamName));
        cache[workstreamName] = workstream;
        return workstream;
    }
    return fetch;
}
const fetchWorkstream = makeWorkstreamFetcher();


fetchWorkstream('all_tasks').updateData('label', 'all_tasks_updated'); //test

// ....
// <-



module.exports = { fetchWorkstream };
