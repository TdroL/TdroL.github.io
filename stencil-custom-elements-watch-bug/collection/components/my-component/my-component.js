import { Component, Prop, h, Watch, State } from '@stencil/core';
export class MyComponent {
    constructor() {
        this.prop = '0';
        this.watchCallCount = 0;
    }
    updateProp() {
        this.watchCallCount++;
    }
    render() {
        return h("pre", null,
            "prop=",
            this.prop,
            "; watchCallCount=",
            this.watchCallCount);
    }
    static get is() { return "my-component"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "prop": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "prop",
            "reflect": false,
            "defaultValue": "'0'"
        }
    }; }
    static get states() { return {
        "watchCallCount": {}
    }; }
    static get watchers() { return [{
            "propName": "prop",
            "methodName": "updateProp"
        }]; }
}
