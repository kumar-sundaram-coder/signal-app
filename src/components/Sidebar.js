import React, { useState } from "react";
import "../css/Sidebar.css";
import { Avatar } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import Add from "@material-ui/icons/Add";
import SidebarChat from "./SidebarChat.js";
import SpeakerNotesIcons from "@material-ui/icons/SpeakerNotes";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { auth } from "../firebase";
import Modal from "react-modal";
import Input from "@material-ui/core/Input/Input";
import IconButton from "@material-ui/core/IconButton/IconButton";
export default function Sidebar() {
  const user = useSelector(selectUser);
  const [modal, setModal] = useState(false);
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <Avatar
          src={user.photo}
          onClick={() => auth.signOut()}
          style={{
            cursor: "pointer",
          }}
        />
        <div className="sidebar-input">
          <SearchIcon />
          <input type="text" placeholder="Search" />
        </div>
        <Add
          onClick={() => {
            setModal(true);
          }}
          style={{
            color: "white",
            fontSize: "x-large",
            paddingLeft: "10px",
            cursor: "pointer",
          }}
        />
        <Modal
          isOpen={modal}
          onRequestClose={() => {
            setModal(false);
          }}
          style={{
            overlay: {
              backgroundColor: "rgba(0,0,0,0.78)",
              margin: "auto",
              zIndex: "1000",
            },
            content: {
              margin: "auto",
              width: "450px",
              height: "400px",
              zIndex: "1001",
            },
          }}
        >
          <div className="modal-info">
            <h3>Add New Chat Name</h3>
            <Input
              required
              className="name-input"
              type="text"
              placeholder="Enter New Chat Name"
            />
            <h3>Add Profile Image(URL)</h3>
            <Input
              required
              className="name-input"
              type="text"
              placeholder="Enter Chat Image(url)"
            />
            <div className="modal-add">
              <IconButton>
                <Add />
              </IconButton>
            </div>
            <button
              onClick={() => {
                setModal(false);
              }}
            >
              Close
            </button>
          </div>
        </Modal>
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
