import React from "react";
import { Link, withRouter } from "react-router-dom";
import Nav from "./Navbar.jsx";
import voice from "../images/voice.svg";
import send from "../images/send.svg";
import profile from "../images/profile.svg";
import { NavContainer } from "./Nav.style.jsx";
import { AppContainer } from "./Container.style";
const fetch = require("node-fetch");
// const dotenv = require("dotenv");
// dotenv.config();

function Write() {
  const [messageContent, setMessageContent] = React.useState("");

  function handleSubmit(event) {
    const message = messageContent;
    event.preventDefault();
    fetch("/api/write-message", {
      method: "POST",
      body: JSON.stringify({ message }),
      headers: { "content-type": "application/json" },
    })
      .then((response) => {
        response.json();
      })
      .catch((error) => console.error("Oops!", error));
  }

  return (
    <div>
      <button>
        <a href="/messages" className="text-link">
          Go back
        </a>
      </button>
      <AppContainer>
        <div className="messageContainer">
          <div className="messageTo">
            To: Jo
            <img className="avatar" src={profile}></img>
          </div>
          <form
            onSubmit={handleSubmit}
            onChange={(event) => setMessageContent(event.target.value)}
          >
            <textarea
              id="text"
              name="text"
              placeholder="Start typing..."
            ></textarea>
            <button type="submit">
              <Link to="/message-sent">Submit</Link>
            </button>
          </form>
          {/* <form action="/api/slack" method="POST" onChange={(event) => setMessageContent(event.target.value)}>
          <textarea placeholder="Start typing..."></textarea>
          <button type="button" onClick={handleSubmit}>Send</button>
          <a href="/success">
            <img src={send}></img>
            Send
          </a> */}

          {/* <button
            type="submit"
            onClick={() => {
              console.log("works");
              sendSlackbotStartMsg(testMessage);
            }}
          ></button> */}
          {/* </form> */}
          <div className="msgButtons">
            <a href="/speak">
              {/* we should change this to be state based rather than page */}
              <img src={voice}></img>
              <span>Press here to speak your message </span>
            </a>
          </div>
        </div>
        <NavContainer>
          <Nav />
        </NavContainer>
      </AppContainer>
    </div>
  );
}

export default Write;

//  <form action="post-review" method="POST"
