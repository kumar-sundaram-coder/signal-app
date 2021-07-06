import React from "react";
import "../css/Message.css";

export default function Message() {
  return (
    <div className="message">
      <div className="message-content">
        <span>User Name</span>
        <p>This is a Message</p>
        <small>Timestamp</small>
      </div>
    </div>
  );
}
