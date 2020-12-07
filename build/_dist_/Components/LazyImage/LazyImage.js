import React, {useState, useEffect} from "../../../web_modules/react.js";
import "./LazyImage.css.proxy.js";
export default function LazyImage2({src, alt, classNames, width, height}) {
  const [imageSrc, setImageSrc] = useState("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=");
  const [imageRef, setImageRef] = useState();
  const onError = (event) => {
    event.target.classList.add("has-error");
  };
  useEffect(() => {
    let observer;
    let didCancel = false;
    if (imageRef && imageSrc !== src) {
      if (IntersectionObserver) {
        observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (!didCancel && (entry.intersectionRatio > 0 || entry.isIntersecting)) {
              setImageSrc(src);
              observer.unobserve(imageRef);
            }
          });
        }, {
          threshold: 0.01,
          rootMargin: "0%"
        });
        observer.observe(imageRef);
      } else {
        setImageSrc(src);
      }
    }
    return () => {
      didCancel = true;
      if (observer && observer.unobserve) {
        observer.unobserve(imageRef);
        imageRef.classList.add("loaded");
      }
    };
  }, [src, imageSrc, imageRef]);
  return /* @__PURE__ */ React.createElement("img", {
    className: `${classNames && classNames.concat(" ")}`,
    ref: setImageRef,
    src: imageSrc,
    alt,
    width,
    height,
    onError
  });
}
