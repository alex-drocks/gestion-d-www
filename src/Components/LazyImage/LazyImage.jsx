import React, {useState, useEffect} from "react";
import "./LazyImage.css";

export default function LazyImage({src, alt}) {
  const [imageSrc, setImageSrc] = useState("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=");
  const [imageRef, setImageRef] = useState();

  const toggleImageSizeOnClick = () => {
    if (imageRef.style.maxWidth !== "100vw") {
      // Set full Width
      const paddingLeft = window.getComputedStyle(document.querySelector(".route-container"), null).getPropertyValue("padding-left")
      imageRef.style.left = "-" + paddingLeft;
      imageRef.style.maxWidth = "100vw";
      imageRef.style.width = "100vw";
      imageRef.classList.add("is-full-width");
    } else {
      // Remove full Width
      imageRef.style.left = "-1%";
      imageRef.style.maxWidth = "102%";
      imageRef.style.width = "102%";
      imageRef.classList.remove("is-full-width");
    }
  }

  const onError = event => {
    event.target.classList.add("has-error");
  };

  useEffect(() => {
      let observer;
      let didCancel = false;

      if (imageRef && imageSrc !== src) {
        if (IntersectionObserver) {
          observer = new IntersectionObserver(
            entries => {
              entries.forEach(entry => {
                if (
                  !didCancel &&
                  (entry.intersectionRatio > 0 || entry.isIntersecting)
                ) {
                  setImageSrc(src);
                  observer.unobserve(imageRef);
                }
              });
            },
            {
              threshold: 0.01,
              rootMargin: "55%"
            }
          );
          observer.observe(imageRef);
        } else {
          // Old browsers fallback
          setImageSrc(src);
        }
      }

      return () => {
        didCancel = true;
        // on component cleanup, we remove the listner
        if (observer && observer.unobserve) {
          observer.unobserve(imageRef);
          imageRef.classList.add("loaded");
        }
      };
    },

    [src, imageSrc, imageRef]
  );

  return (
    <img
      className={"start-hidden preview lazy-image full-container-width img-zoom-fx"}
      ref={setImageRef}
      src={imageSrc}
      alt={alt}
      width={1920}
      height={1040}
      onError={onError}
      onClick={toggleImageSizeOnClick}
    />
  );
};
