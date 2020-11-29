import React from "react";
import "./Quote.css";

export default function Quote(props) {
  return (
    <div className="content-block spacer-top">
      <div className="flex-row flex--justify-center">
        <div className="quote flex-card-border-top flex-col">
          <h2 className="quote--text">{props.children}</h2>
          <div className="quote--author">{props.author}</div>
        </div>
      </div>
    </div>
  );
}
