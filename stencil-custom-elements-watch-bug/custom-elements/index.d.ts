/* StencilCustomElementsWatchBug custom elements bundle */

import { Components } from "../types/components";

interface MyComponent extends Components.MyComponent, HTMLElement {}
export const MyComponent: {
  prototype: MyComponent;
  new (): MyComponent;
};

/**
 * Utility to automatically define all custom elements within this package. 
 * Use the standard [customElements.define()](https://developer.mozilla.org/en-US/docs/Web/API/CustomElementRegistry/define) 
 * method instead to define custom elements individually.
 */
export declare const defineCustomElements: () => void;

export * from '../types';
