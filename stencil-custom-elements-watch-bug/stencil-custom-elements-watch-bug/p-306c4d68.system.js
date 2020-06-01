System.register(['./p-17e80ddc.system.js'], function () {
    'use strict';
    var patchBrowser, bootstrapLazy;
    return {
        setters: [function (module) {
                patchBrowser = module.p;
                bootstrapLazy = module.b;
            }],
        execute: function () {
            patchBrowser().then(function (options) {
                return bootstrapLazy([["p-1260c2ef.system", [[1, "my-component", { "prop": [1], "watchCallCount": [32] }]]]], options);
            });
        }
    };
});
