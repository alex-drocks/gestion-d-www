import React from "../../../web_modules/react.js";
import "./Banner.css.proxy.js";
import ModernImage2 from "../ModernImage/ModernImage.js";
export default function Banner2({bgImage, pageTitle, pageDescription}) {
  const renderBgImage = bgImage && typeof bgImage === "object";
  const containerClassNames = renderBgImage ? "full-width banner-container zoom-hover-fx no-select has-image" : "full-width banner-container zoom-hover-fx no-select";
  return /* @__PURE__ */ React.createElement("div", {
    className: containerClassNames
  }, renderBgImage ? /* @__PURE__ */ React.createElement(ModernImage2, {
    lazyload: false,
    cancelInitialGrowFx: true,
    srcWebp: bgImage.srcWebp,
    srcFallback: bgImage.srcFallback,
    altText: bgImage.alt,
    width: bgImage.width,
    height: bgImage.height,
    classNames: "banner-image"
  }) : null, pageTitle || pageDescription ? /* @__PURE__ */ React.createElement("div", {
    className: "banner-text--container"
  }, pageTitle ? /* @__PURE__ */ React.createElement("h3", {
    className: "banner-text--page-title no-wrap"
  }, pageTitle) : null, pageDescription ? /* @__PURE__ */ React.createElement("h1", {
    className: "banner-text--page-description"
  }, pageDescription) : null) : null);
}
