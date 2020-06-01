System.register(['./p-17e80ddc.system.js'], function (exports) {
    'use strict';
    var registerInstance, h;
    return {
        setters: [function (module) {
                registerInstance = module.r;
                h = module.h;
            }],
        execute: function () {
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
            exports('my_component', MyComponent);
        }
    };
});
