import React from "react";
import { Link, withRouter } from "react-router-dom";
// import Nav from "./Navbar.jsx";
// import microphone from "../images/microphone.svg";
import write from "../images/write.svg";
import { AppContainer } from "./Container.style";
import { Button } from "./Button.style.js";
import Nav from "./Navbar.jsx";
import { NavContainer } from "./Nav.style.jsx";
import profile from "../images/profile.svg";
import mic from "../images/mic.svg";
import micoff from "../images/micoff.svg";
import {
  MessageContainer,
  MessageTop,
  MessageText,
  MessageButtons,
} from "./MessageContainer.style.jsx";

import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

function Speak() {
  const { transcript, resetTranscript } = useSpeechRecognition();
  const [messageContent, setMessageContent] = React.useState("");
  const [recording, setRecording] = React.useState("true");

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return <h1>Your browser does not support Speech recognition. </h1>;
  }

  function toggleRecording() {
    if (recording) {
      console.log(recording, "about to stop listening");
      SpeechRecognition.stopListening();
    } else {
      console.log(recording, "about to start listening");
      SpeechRecognition.startListening({
        continuous: true,
      });
    }
    setRecording(!recording);
  }

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
    <AppContainer>
      <Button className="back-button">
        <a href="/messages" className="text-link">
          {" "}
          Go back{" "}
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
            <div className="textContainer">
              <textarea
                value={transcript}
                rows="8"
                cols="25"
                id="text"
                name="text"
                placeholder="Start speaking..."
                className="text-area"
              ></textarea>
              <button
                id="microphone"
                onClick={toggleRecording}
                className="mic-btn"
              >
                <img
                  src={recording ? mic : micoff}
                  alt="microphone"
                  className="icon"
                ></img>
              </button>
            </div>
            <div className="write-link">
            <Link to="/write">
              <img src={write} alt="write" className="icon"></img>
              <p className="type-link">Press here to type your message</p>
            </Link>
              <button id="send">Send</button>
            </div>
          </form>
        </MessageText>
      </MessageContainer>
      <NavContainer>
        <Nav />
      </NavContainer>
    </AppContainer>
  );
}

export default Speak;
