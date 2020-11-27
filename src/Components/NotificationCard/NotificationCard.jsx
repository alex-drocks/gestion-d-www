import React from "react";
import "./NotificationCard.css";

export default function NotificationCard(props) {
  return (
    <p className="notification-card">
      <span className="svg-background">
        <svg width={24} height={24} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path
            d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-.001 5.75c.69 0 1.251.56 1.251 1.25s-.561 1.25-1.251 1.25S10.75 7.69 10.75 7s.559-1.25 1.249-1.25zM14 18h-4v-1c.484-.179 1-.201 1-.735v-4.467c0-.534-.516-.618-1-.797v-1h3v6.265c0 .535.517.558 1 .735V18z" />
        </svg>
      </span>
      {props.children}
    </p>
  );
}