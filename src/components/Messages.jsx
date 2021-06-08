import React from "react";
import { Link, withRouter } from "react-router-dom";
import Nav from "./Navbar.jsx";
import ReceivedMessage from "./ReceivedMessage.jsx";
import { StyledMessage } from "./Message.style";
import { AppContainer } from "./Container.style";
import { NavContainer } from "./Nav.style";
// import Avatar from "../images/profile.svg";
const fetch = require("node-fetch");

function Messages() {
  //Receive message from slack then store in database so we can retrieve anytime
  function retrievedMessages(event) {
    fetch("/api/read-messages", {})
      .then((response) => {
        console.log("response in messages", response.json());
        return response.json();
      })
      .catch((error) => console.error("Oops message not received!", error));
  }
  
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
      <StyledMessage>
        <ReceivedMessage
          key={index}
          // messageAvatar={fakeData.map((msg) => msg.avatar)[index]}
          messageName={fakeData.map((msg) => msg.name)[index]}
          messageTime={fakeData.map((msg) => msg.timestamp)[index]}
          messageContent={fakeData.map((msg) => msg.messageContent)[index]}
          // setMessageData={setMessageData}
        />
      </StyledMessage>
    );
  });

  return (
    <AppContainer>
      <div>{fakeMessages}</div>
      <Link to="/message1">Read message</Link>
    <button onClick={retrievedMessages}>Button</button>
      <NavContainer>
        <Nav />
      </NavContainer>
    </AppContainer>

  );
}

export default Messages;
