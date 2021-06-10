import React from "react";
import { Link, withRouter } from "react-router-dom";
import Avatar from "../images/profile.svg";
import { AppContainer } from "./Container.style";
import Nav from "./Navbar.jsx";
import { NavContainer } from "./Nav.style";
import { Button } from "./Button.style.js";
import { MessageHeading, StyledMessage } from "./Message.style";

function ReceivedMessage(props) {
  console.log('props', props)
  return (
    <div>
      <Button className="back-button">
        <a href="/messages" className="text-link">
          Go back
        </a>
      </Button>
        <StyledMessage>
          <MessageHeading>
            <div className="parent">
              <img className="avatar" src={Avatar} alt="avatar"></img>
              <div className="time">{props.messageTime} </div>
              <div className="name">{props.messageName} </div>
              <div id="content" className="content">{props.messageContent} </div>
            </div>
            </MessageHeading>
          </StyledMessage>
      <NavContainer>
        <Nav />
      </NavContainer>
    </div>
  );
}

export default ReceivedMessage;
