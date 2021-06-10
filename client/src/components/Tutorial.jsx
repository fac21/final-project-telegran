import React from "react";
import { Link, withRouter } from "react-router-dom";
import {
  AppContainer,
  CenterContainer,
  AppContainerWhite,
} from "./Container.style";
import { Button } from "./Button.style.js";
import Read from "../images/read.png";
import Send from "../images/sent.png";
import Speak from "../images/speak.svg";
import Write from "../images/write.png";
import "../global.css";
import {
  TutorialImage,
  TutorialContainer,
  InstructionsContainer,
} from "./TutorialImage.style";

function Tutorial() {
  return (
    <AppContainerWhite className="mobile-box">
      <h1>Tutorial</h1>
      <h2>Thank you for connecting to Telegran!</h2>
      <TutorialContainer>
        <InstructionsContainer>
          <div>
            <ul>
              <li>
                <h4>Insert Slack Workspace ID and click Connect</h4>
              </li>
              <li>
                <h4>View Messages </h4>
                Click on messages (envelope icon) to read all messages.
              </li>

              <br></br>
              <li>
                <h4>Send New Message </h4>
                Click on write (pen and paper icon) to write your new message.
                <br></br>Type your message in the box and press send
                <br></br>Alternative option if you want to speak your message
                instead!
                <br></br>
                Click on the speaking (speaking icon) to speak your new message.
                <br></br>
                Click on the record (microphone icon) and speak your new
                message. Words will appear in the box. Finished recording. Press
                send.
              </li>
              <br></br>
              <li>
                <h4>Send Emergency Message </h4>
                Click on emergency (SOS icon) to send your automatic help
                message to the Slack channel for all your family and friends
                after 10 seconds.
                <br></br>
                Cancel your emergency message, sent in error. Just click on the
                cross (cross icon) and it will stop sending for you.
              </li>
            </ul>
          </div>
          <div>
            <TutorialImage>
              <img src={Read} alt="read messages" width="200px" />
            </TutorialImage>
            <TutorialImage>
              <img src={Speak} alt="speak messages" width="200px" />
            </TutorialImage>
            <TutorialImage>
              <img src={Send} alt="send messages" width="200px" />
            </TutorialImage>
          </div>
        </InstructionsContainer>
      </TutorialContainer>
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
    </AppContainerWhite>
  );
}

export default Tutorial;
