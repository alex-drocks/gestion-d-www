import React from "react";
import "./Bio.css";

import LazyImage from "../LazyImage/LazyImage";

export default function Bio(props) {
  return (
    <div className="bio-container flex-row flex-card-border-top">
      <div className="flex-col bio-image-container">
        <LazyImage
          src={props.image}
          classNames={""}
          height={250}
          width={250}
          alt={props.name}
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
