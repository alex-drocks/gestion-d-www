import React from "../../../web_modules/react.js";
import "./Video.css.proxy.js";
export default function Video2({webmSrc, mp4Src}) {
  return /* @__PURE__ */ React.createElement("figure", {
    className: "figure full-container-width"
  }, /* @__PURE__ */ React.createElement("video", {
    controls: true,
    loop: true,
    muted: true,
    playsInline: true,
    className: "preview preview--video"
  }, /* @__PURE__ */ React.createElement("source", {
    src: webmSrc,
    type: "video/webm"
  }), /* @__PURE__ */ React.createElement("source", {
    src: mp4Src,
    type: "video/mp4"
  }), "D\xE9sol\xE9, votre navigateur ne supporte pas les vid\xE9os."));
}
