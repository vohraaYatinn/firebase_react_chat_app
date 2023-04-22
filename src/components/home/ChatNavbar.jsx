import React, { useEffect,useRef } from "react";
import { useSelector } from "react-redux";

const ChatNavbar = () => {
    const myState = useSelector((state) => state.changeTheUser);

  return (
    <div className="flex user_chat">
      <h4>{myState.initialState?.displayName}</h4>
      <span className="user_chat_span">
        <i class="fa fa-video-camera" aria-hidden="true"></i>
        <i class="fa fa-user-plus" aria-hidden="true"></i>
        <i class="fa fa-caret-down" aria-hidden="true"></i>
      </span>
    </div>
  );
};

export default ChatNavbar;
