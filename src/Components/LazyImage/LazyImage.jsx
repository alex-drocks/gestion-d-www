import React, {useState, useEffect} from "react";
import "./LazyImage.css";

export default function LazyImage({src, alt, classNames, width, height}) {
  const [imageSrc, setImageSrc] = useState("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=");
  const [imageRef, setImageRef] = useState();

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
              rootMargin: "0%"
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
      className={`${classNames && classNames.concat(" ")}`}
      ref={setImageRef}
      src={imageSrc}
      alt={alt}
      width={width}
      height={height}
      onError={onError}
    />
  );
};
