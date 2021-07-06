import React from "react";
import "../css/Chat.css";
import Avatar from "@material-ui/core/Avatar/Avatar";
import SearchIcon from "@material-ui/icons/Search";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import Message from "./Message";
import { Add, EmojiEmotions, MicNone, Style } from "@material-ui/icons";

export default function Chat() {
  return (
    <div className="chat">
      <div className="chat-header">
        <div className="chat-headerLeft">
          <Avatar />
          <h5>Chat Name</h5>
        </div>
        <div className="chat-headerRight">
          <SearchIcon />
          <MoreHorizIcon />
        </div>
      </div>
      <div className="chat-body">
        <div className="message-header">
          <Avatar />
          <h3>Chat Name</h3>
        </div>
        <Message />
      </div>
      <div className="chat-footer">
        <EmojiEmotions />
        <form>
          <input placeholder="Send a Messsage" type="text" />
          <button type="submit">Send</button>
        </form>
        <div className="chat-footerIcons">
          <Style />
          <MicNone />
          <Add />
        </div>
      </div>
    </div>
  );
}
