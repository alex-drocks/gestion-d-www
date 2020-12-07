import React from "react";

import "./Banner.css";
import ModernImage from "../ModernImage/ModernImage";

export default function Banner({
                                 bgImage,
                                 pageTitle,
                                 pageDescription
                               }) {

  const renderBgImage = bgImage && typeof bgImage === "object";
  const containerClassNames = renderBgImage
    ? "full-width banner-container zoom-hover-fx no-select has-image"
    : "full-width banner-container zoom-hover-fx no-select";

  return (
    <div className={containerClassNames}>
      {renderBgImage
        ? <ModernImage
          lazyload={false}
          cancelInitialGrowFx={true}
          srcWebp={bgImage.srcWebp}
          srcFallback={bgImage.srcFallback}
          altText={bgImage.alt}
          width={bgImage.width}
          height={bgImage.height}
          classNames="banner-image" />
        : null
      }

      {pageTitle || pageDescription
        ? <div className="banner-text--container">
          {pageTitle
            ? <h3 className="banner-text--page-title no-wrap">{pageTitle}</h3>
            : null
          }
          {pageDescription
            ? <h1 className="banner-text--page-description">{pageDescription}</h1>
            : null
          }
        </div>
        : null
      }
    </div>
  );
}
