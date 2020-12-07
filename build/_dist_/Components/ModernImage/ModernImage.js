import React, {useEffect, useRef} from "../../../web_modules/react.js";
import "../../../web_modules/lazysizes.js";
export default function ModernImage({
  lazyload,
  cancelInitialGrowFx,
  srcWebp,
  srcFallback,
  width,
  height,
  altText,
  classNames,
  onClickFunc
}) {
  const element = useRef(null);
  useEffect(() => {
    if (cancelInitialGrowFx)
      return;
    setTimeout(() => {
      element.current["classList"].add("initial-grow-fx");
    }, 0);
  }, [element, cancelInitialGrowFx]);
  return /* @__PURE__ */ React.createElement("picture", null, /* @__PURE__ */ React.createElement("source", {
    type: "image/webp",
    "data-srcset": lazyload ? srcWebp : null,
    srcSet: lazyload ? null : srcWebp
  }), /* @__PURE__ */ React.createElement("img", {
    src: lazyload ? "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" : srcFallback,
    "data-src": lazyload ? srcFallback : null,
    width,
    height,
    alt: altText,
    ref: element,
    onClick: onClickFunc ? (e) => onClickFunc(e.target) : null,
    className: `${classNames}${lazyload ? " lazyload" : ""}`
  }));
}
