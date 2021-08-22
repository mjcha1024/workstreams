

// workstreams are, recursively, a conglomeration of other worksteams
class Workstream {

    constructor(attributes, data) {
        this.attribute = attributes;    // attributes are fixed and should only be edited manually in the file
        this.data = data;   // data is editable by ui
    }

    get next() {
        return this.members[0];
    }

    get members() {
        this.attributes.findMembers(this.data);
    }
}



// ....

// <-

// function saveWorkstreamData() {}
