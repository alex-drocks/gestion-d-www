import React from "react";
import "./NotificationCard.css";

export default function NotificationCard(props) {
  return (
    <p className="notification-card">
      <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 1C5.662 1 0 5.226 0 11.007c0 2.05.739 4.063 2.047 5.625.055 1.83-1.023 4.456-1.993 6.368 2.602-.47 6.301-1.508 7.978-2.536C17.268 22.711 24 17.059 24 11.007 24 5.195 18.299 1 12 1zm1 15h-2v-6h2v6zm-1-7.75c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25z" />
      </svg>
      {props.children}
    </p>
  );
}