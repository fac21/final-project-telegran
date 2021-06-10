import React, { useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import Nav from "./Navbar.jsx";
import ReceivedMessage from "./ReceivedMessage.jsx";
// import { MessageHeading, StyledMessage } from "./Message.style";
import { AppContainer } from "./Container.style";
import { NavContainer } from "./Nav.style";
import Avatar from "../images/profile.svg";
const fetch = require("node-fetch");

function Messages() {
  const [messageData, setMessageData] = React.useState([]);

  React.useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/api/read-messages`, {})
      .then((response) => response.json())
      .then((data) => setMessageData(data))
      .catch((error) => console.error("Oops message not received!", error));
  }, []);
  console.log("message Data", messageData);

  function messageName() {
    let names = [
      "Chisha",
      "Chun",
      "Jo",
      "Nafisa",
      "Chisha",
      "Chun",
      "Jo",
      "Nafisa",
      "Chisha",
      "Chun",
    ];
    let index = Math.floor(Math.random() * 10);
    return names[index];
  }

  const slackMessages = messageData.map((msg, index) => {
    return (
      // <StyledMessage>
        // <MessageHeading>
        <ReceivedMessage
          key={index}
            // messageAvatar={fakeData.map((msg) => msg.avatar)[index]}
            messageName={messageName()}
            messageTime='8th February 11:25'
          messageContent={msg.text}
        >

        </ReceivedMessage>
    );
  });
  console.log("slack messages", slackMessages);
  return (
    <AppContainer>
      <div>{slackMessages}</div>
      <Link to="/message1">Read message</Link>
      {/* <button onClick={retrievedMessages}>Button</button> */}
      <NavContainer>
        <Nav />
      </NavContainer>
    </AppContainer>
  );
}

export default Messages;
