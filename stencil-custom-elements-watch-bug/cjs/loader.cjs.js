'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-1911a11c.js');

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return index.patchEsm().then(() => {
  return index.bootstrapLazy([["my-component.cjs",[[1,"my-component",{"prop":[1],"watchCallCount":[32]}]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
