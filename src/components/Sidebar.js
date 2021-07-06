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
import CloseIcon from "@material-ui/icons/Close";

export default function Sidebar() {
  const user = useSelector(selectUser);
  const [modal, setModal] = useState(false);
  const [chatInput, setChatInput] = useState(null);
  const [imageInput, setImageInput] = useState(
    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Signal-Logo.svg/150px-Signal-Logo.svg.png"
  );

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
              width: "400px",
              height: "400px",
              zIndex: "1001",
            },
          }}
        >
          <CloseIcon
            style={{
              cursor: "pointer",
              fontSize: "xx-large",
            }}
            onClick={() => {
              setModal(false);
            }}
          />
          <div className="modal-info">
            <h3>Add New Chat Name</h3>
            <Input
              required
              value={chatInput}
              onChange={(e) => {
                setChatInput(e.target.value);
              }}
              className="name-input"
              type="text"
              placeholder="Enter New Chat Name"
            />
            <h3>Add Profile Image(URL)</h3>
            <Input
              required
              value={imageInput}
              onChange={(e) => {
                setImageInput(e.target.value);
              }}
              className="name-input"
              type="text"
              placeholder="Enter Chat Image(url)"
            />
            <div className="modal-add">
              <IconButton>
                <Add
                  style={{
                    fontSize: "xx-large",
                    color: "white",
                  }}
                />
              </IconButton>
            </div>
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
