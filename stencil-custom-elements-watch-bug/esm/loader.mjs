import { a as patchEsm, b as bootstrapLazy } from './index-f4b6ab77.js';

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return bootstrapLazy([["my-component",[[1,"my-component",{"prop":[1],"watchCallCount":[32]}]]]], options);
  });
};

export { defineCustomElements };
