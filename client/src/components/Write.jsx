import React from "react";
import { Link, withRouter } from "react-router-dom";
import Nav from "./Navbar.jsx";
import voice from "../images/voice.svg";
import send from "../images/send.svg";
import profile from "../images/profile.svg";
const fetch = require("node-fetch");
const dotenv = require("dotenv");
dotenv.config();

function Write({ messageContent, setMessageContent }) {
  let testMessage = {
    channel: `${process.env.SLACK_CHANNEL_ID}`,
    text: `${messageContent}`,
  };

  function sendSlackbotStartMsg(messageData) {
    fetch(`${process.env.INCOMING_WEBHOOK_URL}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: "Bearer " + process.env.BOT_USER_OAUTH_TOKEN,
      },
      body: JSON.stringify(messageData),
    })
      .then((response) => {
        if (!response.ok) throw new Error(response.status);
        return response;
      })
      .then((res) => console.log(res.status, res.statusText))
      .catch((error) => console.error(error));
  }

  return (
    <>
      <button>
        <a href="/messages">Go back</a>
      </button>
      <div className="messageContainer">
        <div className="messageTo">
          To: Jo
          <img className="avatar" src={profile}></img>
        </div>
        <form
          action="#"
          onSubmit={(e) => {
            e.preventDefault();
            console.log(e.target.value);
            setMessageContent(e.target.value);
          }}
        >
          <textarea placeholder="Start typing..."></textarea>
          <button type="submit">
            <a href="/success">
              <img src={send}></img>
              Send
            </a>
          </button>
          <button
            type="submit"
            onSubmit={(e) => {
              e.preventDefault();
              console.log("works");
              sendSlackbotStartMsg(testMessage);
            }}
          >
            Test Button
          </button>
        </form>
        <div className="msgButtons">
          <a href="/speak">
            {/* we should change this to be state based rather than page */}
            <img src={voice}></img>
            <span>Press here to speak your message </span>
          </a>
        </div>
      </div>
      <Nav />
    </>
  );
}

export default Write;
