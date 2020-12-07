import React from "../../../web_modules/react.js";
import "./Bio.css.proxy.js";
import ModernImage2 from "../ModernImage/ModernImage.js";
export default function Bio2(props) {
  return /* @__PURE__ */ React.createElement("div", {
    className: "bio-container flex-row flex-card-border-top"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex-col bio-image-container"
  }, /* @__PURE__ */ React.createElement(ModernImage2, {
    lazyload: true,
    altText: props.name,
    srcWebp: props.image.webp,
    srcFallback: props.image.fallback,
    cancelInitialGrowFx: true,
    classNames: "",
    height: 250,
    width: 250
  })), /* @__PURE__ */ React.createElement("div", {
    className: "flex-col bio-info-container"
  }, /* @__PURE__ */ React.createElement("h3", null, props.name), /* @__PURE__ */ React.createElement("div", {
    className: "blue-text"
  }, props.role), /* @__PURE__ */ React.createElement("p", null, props.children)));
}
