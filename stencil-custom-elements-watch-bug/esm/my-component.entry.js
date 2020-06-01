import { r as registerInstance, h } from './index-f4b6ab77.js';

class MyComponent {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.prop = '0';
        this.watchCallCount = 0;
    }
    updateProp() {
        this.watchCallCount++;
    }
    render() {
        return h("pre", null, "prop=", this.prop, "; watchCallCount=", this.watchCallCount);
    }
    static get watchers() { return {
        "prop": ["updateProp"]
    }; }
}

export { MyComponent as my_component };
