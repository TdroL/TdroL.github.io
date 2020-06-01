import { p as patchBrowser, b as bootstrapLazy } from './index-f4b6ab77.js';
patchBrowser().then(function (options) {
    return bootstrapLazy([["my-component", [[1, "my-component", { "prop": [1], "watchCallCount": [32] }]]]], options);
});
