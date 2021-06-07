import React from "react";
import { Link, withRouter } from "react-router-dom";
import Nav from "./Navbar.jsx";
import ReceivedMessage from "./ReceivedMessage.jsx";

function Messages() {
  // const [messageData, setMessageData] = React.useState(fakeData);

  const fakeData = [
    {
      name: "Nafisa",
      timestamp: "07/06/2021, 11.00am",
      messageContent: "Hi gran how are you",
    },
    {
      name: "Chisha",
      timestamp: "06/06/2021, 10.00am",
      messageContent: "Love u grandad",
    },
  ];

  const NUM_OF_MESSAGES = 4;

  const fakeMessages = fakeData.map((fakeMsg, index) => {
    console.log(fakeMsg, index);
    return (
      <ReceivedMessage
        key={index}
        messageName={fakeData.map((msg) => msg.name)[index]}
        messageTime={fakeData.map((msg) => msg.timestamp)[index]}
        messageContent={fakeData.map((msg) => msg.messageContent)[index]}
        // setMessageData={setMessageData}
      />
    );
  });

  return (
    <>
      <div>{fakeMessages}</div>
      <Nav />
    </>
  );
}

export default Messages;
