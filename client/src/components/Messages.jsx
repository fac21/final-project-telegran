import React, { useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import Nav from "./Navbar.jsx";
import ReceivedMessage from "./ReceivedMessage.jsx";
import { StyledMessage } from "./Message.style";
import { AppContainer } from "./Container.style";
import { NavContainer } from "./Nav.style";
// import Avatar from "../images/profile.svg";
const fetch = require("node-fetch");

function Messages() {
  const [messageData, setMessageData] = React.useState([]);

  React.useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/api/read-messages`, {})
      .then((response) => response.json())
      .then((data) => setMessageData(data))
      .catch((error) => console.error("Oops message not received!", error));
  }, []);

  // const fakeData = [
  //   {
  //     name: "Nafisa",
  //     timestamp: "07/06/2021, 11.00am",
  //     messageContent: "Hi gran how are you",
  //   },
  //   {
  //     name: "Chisha",
  //     timestamp: "06/06/2021, 10.00am",
  //     messageContent: "Love u grandad",
  //   },
  // ];

  // const NUM_OF_MESSAGES = 4;

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
      <StyledMessage>
        {/* <div>{messageData}</div> */}
        <ReceivedMessage
          key={index}
          // messageAvatar={messageData.map((msg) => msg.avatar)[index]}
          messageName={messageName()}
          messageTime="01/01/2021"
          // messageContent={messageData.map((msg) => msg.text)[index]
          messageContent={ msg.text }
          // setMessageData={setMessageData}
        />
      </StyledMessage>
    );
  });

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
