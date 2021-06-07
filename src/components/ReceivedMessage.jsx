import React from "react";
import { Link, withRouter } from "react-router-dom";
import Avatar from "../images/profile.svg";

function ReceivedMessage(props) {
  return (
    <>
      <div className="parent">
        <img className="avatar" src={Avatar} alt="avatar"></img>
        <div className="time">{props.messageTime} </div>
        <div className="name">{props.messageName} </div>
        <div className="content">{props.messageContent} </div>
      </div>
      {/* <div>{props.messageName}</div>
      <div>{props.messageTime}</div>
      <div>{props.messageContent}</div>
      <br></br> */}
    </>
  );
}

export default ReceivedMessage;
