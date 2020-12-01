import React from "react";

export default function ClickableServiceCard(props) {
  return (
    <a href={`${props.linkTo}`}
       className={`content-block card${props.classNames ? " " + props.classNames : ""}`}>
      <div>
        <h2>{props.serviceName}</h2>
        <p>
          {props.children}
        </p>
        <span className="text-link blue-text">
          {props.linkText}
        </span>
      </div>
    </a>
  );
}