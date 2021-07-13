import React, { useState } from "react";
import "../css/Sidebar.css";
import { Avatar } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import Add from "@material-ui/icons/Add";
import SidebarChat from "./SidebarChat.js";
import SpeakerNotesIcons from "@material-ui/icons/SpeakerNotes";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import db, { auth } from "../firebase";
import Modal from "react-modal";
import Input from "@material-ui/core/Input/Input";
import IconButton from "@material-ui/core/IconButton/IconButton";
import CloseIcon from "@material-ui/icons/Close";
// import firebase from "firebase";

export default function Sidebar() {
  const user = useSelector(selectUser);
  const [modal, setModal] = useState(false);

  let chatInput = null;
  let imageInput = null;

  let C="";
  // imageInput =
  //   "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Signal-Logo.svg/150px-Signal-Logo.svg.png";

  function setChatInput(e) {
    chatInput = e.target.value;
    C = chatInput;
    console.log(C);
    console.log(chatInput);

    // console.log(e.target.value);
    // console.log(imageInput);
  }
  function setImageInput(e) {
    imageInput = e.target.value;

    console.log(imageInput);
    // console.log(e.target.value);
    // console.log(chatInput);
  }

  const handleAdd = (e) => {
    console.log(chatInput);
    console.log(C);
    if (chatInput != null) {
      // db.collection("chats").add({
      //   chatName: chatInput,
      //   chatImage: imageInput,
      //   timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      // });
      db.collection("chats").add({
        chatName: chatInput,
      });
    }
  };

  // imageInput =
  //   "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Signal-Logo.svg/150px-Signal-Logo.svg.png";

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
          ariaHideApp={false}
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
              type="text"
              onChange={setChatInput}
              className="name-input"
              placeholder="Enter New Chat Name"
              required
              value={chatInput}
            />

            <h3>Add Profile Image(URL)</h3>
            <Input
              type="text"
              onChange={setImageInput}
              className="name-input"
              placeholder="Enter Profile Image URL (optional)"
              value={imageInput}
            />
            <div className="modal-add">
              <IconButton onClick={handleAdd}>
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
