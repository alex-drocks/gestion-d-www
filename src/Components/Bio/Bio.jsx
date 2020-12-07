import React from "react";
import "./Bio.css";

import ModernImage from "../ModernImage/ModernImage";

export default function Bio(props) {
  return (
    <div className="bio-container flex-row flex-card-border-top">
      <div className="flex-col bio-image-container">
        <ModernImage
          lazyload={true}
          altText={props.name}
          srcWebp={props.image.webp}
          srcFallback={props.image.fallback}
          cancelInitialGrowFx={true}
          classNames={""}
          height={250}
          width={250}
        />
      </div>
      <div className="flex-col bio-info-container">
        <h3>{props.name}</h3>
        <div className="blue-text">{props.role}</div>
        <p>{props.children}</p>
      </div>
    </div>
  );
}
