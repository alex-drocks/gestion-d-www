import __SNOWPACK_ENV__ from '../__snowpack__/env.js';
import.meta.env = __SNOWPACK_ENV__;

import React from "../web_modules/react.js";
import {render, hydrate} from "../web_modules/react-dom.js";
import App2 from "./App.js";
const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(/* @__PURE__ */ React.createElement(App2, null), rootElement);
} else {
  render(/* @__PURE__ */ React.createElement(App2, null), rootElement);
}
if (import.meta.hot) {
  import.meta.hot.accept();
}
