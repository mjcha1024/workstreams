
/*
Modified Function Object:
- values are guaranteed to be functions
- accepts a generator for keys that have no explicit value set
*/

class Mofo {
    constructor(dict = {}, makeFunc = key => (() => undefined)) {
        this.dict = dict;
        this.makeFunc = makeFunc;
    }

    // returns function at key
    getFunc(key) {
        // console.log(this.makeFunc.toString())
        return dict[key] || this.makeFunc(key);
    }

    // returns value of function at key
    getVal(key) {
        // console.log(this.getFunc(key).toString())
        return this.getFunc(key)();
    }
}

function test1(key) {
    dict = {
        testFunc: () => "testFunc value"
    };
    mofo = new Mofo(dict);
    console.log(mofo.getVal(key));
}
// test1("testFunc"); // "testFunc value"
// test1("someRandomKey"); // undefined

function test2(key, makeFunc = key => (() => key)) {
    dict = {
        testFunc: () => "testFunc value"
    };
    mofo = new Mofo(dict, makeFunc);
    console.log(mofo.getVal(key));
}
// test2("testFunc"); // "testFunc value"
// test2("someRandomKey"); // "someRandomKey"
// test2("someRandomKey2"); // "someRandomKey2"
