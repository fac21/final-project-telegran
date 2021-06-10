import React from "react";
import { Link, withRouter } from "react-router-dom";
// import Nav from "./Navbar.jsx";
// import microphone from "../images/microphone.svg";
import write from "../images/write.svg";
import { AppContainer } from "./Container.style";
import { Button } from "./Button.style.js";
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
          <div className="spokenWords">
            {/* <button
              onClick={SpeechRecognition.startListening({
                continuous: true,
              })}
            >
              Start{" "}
            </button>
            <button onClick={SpeechRecognition.stopListening}>Stop</button>
            <button onClick={resetTranscript}>Reset</button> */}

            <button id="microphone" onClick={toggleRecording}>
              <img
                src={recording ? mic : micoff}
                alt="microphone"
                className="icon"
              ></img>
            </button>

            {/* <button id="stopRecording">Stop Recording</button>
           <img src={microphone} alt="microphone" className="icon"></img>  */}
          </div>
          <p>Press here to type your message</p>

          <form
            className="form"
            onSubmit={handleSubmit}
            onChange={(event) => setMessageContent(event.target.value)}
          >
            <textarea
              value={transcript}
              rows="5"
              cols="20"
              id="text"
              name="text"
              placeholder="Start typing..."
              className="text-area"
            ></textarea>

            <Link to="/write">
              <img src={write} alt="write" className="icon"></img>
              <div>Write</div>
            </Link>
            <button id="send">Send</button>
          </form>
        </MessageText>
      </MessageContainer>
    </AppContainer>
  );
}

export default Speak;
