import React from "react";

function ReceivedMessage(props) {
  return (
    <>
      <div>{props.messageName}</div>
      <div>{props.messageTime}</div>
      <div>{props.messageContent}</div>
      <br></br>
    </>
  );
}

export default ReceivedMessage;
