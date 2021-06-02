import React from "react";
import { Link, withRouter } from "react-router-dom";
import Nav from "./Navbar.jsx";
import voice from "../images/voice.svg";
import send from "../images/send.svg";
import profile from "../images/profile.svg";
const fetch = require("node-fetch");
const dotenv = require("dotenv");
dotenv.config();

function Write() {
  const [messageContent, setMessageContent] = React.useState("");
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
        <form action="#">
          <textarea
            placeholder="Start typing..."
            onChange={(event) => setMessageContent(event.target.value)}
          ></textarea>
          <button type="submit"> </button>
          <a href="/success">
            <img src={send}></img>
            Send
          </a>

          <button
            type="submit"
            onClick={() => {
              console.log("works");
              sendSlackbotStartMsg(testMessage);
            }}
          ></button>
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
