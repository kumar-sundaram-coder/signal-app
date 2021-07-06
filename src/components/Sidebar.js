import React from "react";
import "../css/Sidebar.css";
import { Avatar } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { Add } from "@material-ui/icons";
import SidebarChat from "./SidebarChat.js";
import SpeakerNotesIcons from "@material-ui/icons/SpeakerNotes";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <Avatar
          style={{
            cursor: "pointer",
          }}
        />
        <div className="sidebar-input">
          <SearchIcon />
          <input type="text" placeholder="Search" />
        </div>
        <Add
          style={{
            color: "white",
            fontSize: "x-large",
            paddingLeft: "10px",
          }}
        />
      </div>
      <div className="sidebar-chats">
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
      </div>
      <div className="sidebar-notes">
        <div className="sidebar-notesIcon">
          <SpeakerNotesIcons />
        </div>
        <p>Note to self</p>
      </div>
    </div>
  );
}
