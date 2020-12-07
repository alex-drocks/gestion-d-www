import React from "../../../web_modules/react.js";
export default function ClickableServiceCard(props) {
  return /* @__PURE__ */ React.createElement("a", {
    href: `${props.linkTo}`,
    className: `content-block card${props.classNames ? " " + props.classNames : ""}`
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h2", null, props.serviceName), /* @__PURE__ */ React.createElement("p", null, props.children), /* @__PURE__ */ React.createElement("span", {
    className: "text-link blue-text"
  }, props.linkText)));
}
