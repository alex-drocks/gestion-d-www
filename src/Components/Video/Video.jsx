import React from "react";
import "./Video.css";

export default function Video({ webmSrc, mp4Src }) {
  return (
    <figure className={"figure full-container-width"}>
      <video
        controls
        loop
        muted
        playsInline
        className={"preview preview--video"}
      >
        <source src={webmSrc} type="video/webm" />
        <source src={mp4Src} type="video/mp4" />
        Désolé, votre navigateur ne supporte pas les vidéos.
      </video>
    </figure>
  );
}
