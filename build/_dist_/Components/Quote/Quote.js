import React from "../../../web_modules/react.js";
import "./Quote.css.proxy.js";
export default function Quote2(props) {
  return /* @__PURE__ */ React.createElement("div", {
    className: "content-block spacer-top"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex-row flex--justify-center"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "quote flex-card-border-top flex-col"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "quote--text"
  }, props.children), /* @__PURE__ */ React.createElement("div", {
    className: "quote--author"
  }, props.author))));
}
