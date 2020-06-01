import { r as registerInstance, h } from './index-f4b6ab77.js';
var MyComponent = /** @class */ (function () {
    function MyComponent(hostRef) {
        registerInstance(this, hostRef);
        this.prop = '0';
        this.watchCallCount = 0;
    }
    MyComponent.prototype.updateProp = function () {
        this.watchCallCount++;
    };
    MyComponent.prototype.render = function () {
        return h("pre", null, "prop=", this.prop, "; watchCallCount=", this.watchCallCount);
    };
    Object.defineProperty(MyComponent, "watchers", {
        get: function () {
            return {
                "prop": ["updateProp"]
            };
        },
        enumerable: false,
        configurable: true
    });
    return MyComponent;
}());
export { MyComponent as my_component };
