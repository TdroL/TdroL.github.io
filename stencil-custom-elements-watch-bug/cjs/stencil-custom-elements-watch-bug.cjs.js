'use strict';

const index = require('./index-1911a11c.js');

index.patchBrowser().then(options => {
  return index.bootstrapLazy([["my-component.cjs",[[1,"my-component",{"prop":[1],"watchCallCount":[32]}]]]], options);
});
