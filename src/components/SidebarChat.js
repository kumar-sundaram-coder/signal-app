import React from "react";
import { Avatar } from "@material-ui/core";
import "../css/SidebarChat.css";

export default function SidebarChat() {
  return (
    <div className="sidebarChat">
      <Avatar />
      <div className="sidebarChat-info">
        <small>Timestamp</small>
        <h3>Chat Name</h3>
        <p>Message</p>
      </div>
    </div>
  );
}
