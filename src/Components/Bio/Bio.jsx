import React from "react";
import "./Bio.css";

export default function Bio(props) {
  return (
    <div className="bio flex-row flex-card">
      <div className="flex-col">
        <img src={props.image} alt="Daniel" />
      </div>
      <div className="flex-col">
        <h3>{props.name}</h3>
        <div className="blue-text">{props.role}</div>
        <p>{props.children}</p>
      </div>
    </div>
  );
}