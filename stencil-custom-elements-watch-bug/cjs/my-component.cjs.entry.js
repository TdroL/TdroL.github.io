'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-1911a11c.js');

class MyComponent {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.prop = '0';
        this.watchCallCount = 0;
    }
    updateProp() {
        this.watchCallCount++;
    }
    render() {
        return index.h("pre", null, "prop=", this.prop, "; watchCallCount=", this.watchCallCount);
    }
    static get watchers() { return {
        "prop": ["updateProp"]
    }; }
}

exports.my_component = MyComponent;
