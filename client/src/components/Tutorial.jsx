import React from "react";
import { Link, withRouter } from "react-router-dom";
import { AppContainer, CenterContainer } from "./Container.style";
import { Button } from "./Button.style.js";
import Read from "../images/read.png";
import Send from "../images/sent.png";
import Speak from "../images/speak.png";
import Write from "../images/write.png";

function Tutorial() {
  return (
    <AppContainer>
      <h1>Tutorial</h1>
      <div>
        <h2>Thank you for connecting to Telegran</h2>
        <h3>To set up follow instructions below.</h3>
        <ul>
          <li>Insert Slack Workspace ID and click Connect</li>
          <br></br>
          <li>
            <p>View Messages: </p>
            Click on messages (envelope icon) to read all messages.
            <img src={Read} alt="read messages"></img>
          </li>
          <br></br>
          <li>
            <p>Send New Message: </p>
            Click on write (pen and paper icon) to write your new message.
            <br></br>Type your message in the box and press send
            <img src={Send} alt="send messages"></img>
            <br></br>Alternative option if you want to speak your message
            instead!
            <br></br>
            Click on the speaking (speaking icon) to speak your new message.
            <br></br>
            Click on the record (microphone icon) and speak your new message.
            Words will appear in the box. Finished recording. Press send.
          </li>
          <img src={Speak} alt="speak messages"></img>
          <br></br>
          <li>
            <p>Send Emergency Message: </p>
            Click on emergency (SOS icon) to send your automatic help message to
            the Slack channel for all your family and friends after 10 seconds.
            <br></br>
            Cancel your emergency message, sent in error. Just click on the
            cross (cross icon) and it will stop sending for you.
          </li>
        </ul>

        <CenterContainer>
          <Button>
            <Link to="/video" className="text-link">
              Video Tutorial
            </Link>
          </Button>
          <Button type="submit">
            <Link to="/welcome" className="text-link">
              Skip
            </Link>
          </Button>
        </CenterContainer>
      </div>
    </AppContainer>
  );
}

export default Tutorial;
