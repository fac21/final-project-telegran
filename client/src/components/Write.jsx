import React from "react";
import { Redirect } from "react-router-dom";
import Nav from "./Navbar.jsx";
import voice from "../images/voice.svg";
import send from "../images/send.svg";
import profile from "../images/profile.svg";
import { NavContainer } from "./Nav.style.jsx";
import { AppContainer } from "./Container.style";
import { Button } from "./Button.style.js";
import { Link, withRouter } from "react-router-dom";
import {
  MessageContainer,
  MessageTop,
  MessageText,
  MessageButtons,
} from "./MessageContainer.style.jsx";
const fetch = require("node-fetch");

function Write() {
  const [messageContent, setMessageContent] = React.useState("");

  function handleSubmit(event) {
    const message = messageContent;
    event.preventDefault();
    fetch(`${process.env.REACT_APP_API_URL}/api/write-message`, {
      method: "POST",
      body: JSON.stringify({ message }),
      headers: { "content-type": "application/json" },
    })
      .then((response) => {
        response.json();
        return <Redirect to="/message-sent" />;
      })
      .catch((error) => console.error("Oops!", error));
  }

  return (
    <div>
      <AppContainer>
        <Button className="back-button">
          <a href="/messages" className="text-link">
            Go back
          </a>
        </Button>
        <MessageContainer>
          <MessageTop>
            <span>To:</span>
            <span></span>
            Jo<img className="avatar" src={profile}></img>
          </MessageTop>
          <MessageText>
            <form
              className="form"
              onSubmit={handleSubmit}
              onChange={(event) => setMessageContent(event.target.value)}
            >
              <textarea
                rows="5"
                cols="20"
                id="text"
                name="text"
                placeholder="Start typing..."
                className="text-area"
              ></textarea>
              <Button type="submit" onClick={handleSubmit}>
                <Link to="/message-sent">Send</Link>
              </Button>
            </form>
          </MessageText>
          <MessageButtons>
            <div className="msgButtons">
              <a href="/speak">
                {/* we should change this to be state based rather than page */}
                <img src={voice}></img>
                <span>Press here to speak your message</span>
              </a>
            </div>
          </MessageButtons>
        </MessageContainer>
        <NavContainer>
          <Nav />
        </NavContainer>
      </AppContainer>
    </div>
  );
}

export default Write;

//  <form action="post-review" method="POST"
