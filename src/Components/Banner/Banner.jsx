import React from "react";
import LazyImage from "../LazyImage/LazyImage";

import "./Banner.css";


export default function Banner({ image, alt, width, height, pageTitle, pageDescription }) {
  return (
    <div className="full-width banner-container zoom-hover-fx">

      {image ? <LazyImage src={image} alt={alt}
                          classNames={"banner-image"}
                          width={width} height={height}
      /> : ""
      }

      {pageTitle || pageDescription ?
        <div className="banner-text--container">
          {pageTitle ? <h3 className="banner-text--page-title no-wrap">{pageTitle}</h3> : ""}
          {pageDescription ? <h1 className="banner-text--page-description">{pageDescription}</h1> : ""}
        </div> : ""
      }
    </div>
  );
}