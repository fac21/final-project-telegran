import React from "react";
import { Link, withRouter } from "react-router-dom";
import Nav from "./Navbar.jsx";
import microphone from "../images/microphone.svg";
import write from "../images/write.svg";

import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

function Speak() {
  const { transcript, resetTranscript } = useSpeechRecognition();

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return (
      <h1>Your browser does not support Speech recognition. </h1>
    );
  }

  // const [recording, setRecording] = React.useState(false);
  function toggleRecording() {
    // setRecording(!recording);
  }
  return (
    <div>
      <p>Go back</p>
      <p>To: </p>
      <div className="spokenWords">
        <button
          onClick={SpeechRecognition.startListening({
            continuous: true,
          })}
        >
          Start
        </button>
        <button onClick={SpeechRecognition.stopListening}>Stop</button>
        <button onClick={resetTranscript}>Reset</button>

        <button id="microphone" onClick={toggleRecording}>
          Recording
        </button>
        <img src={microphone} alt="microphone" className="icon"></img>
        {/* <button id="stopRecording">Stop Recording</button>
           <img src={microphone} alt="microphone" className="icon"></img>  */}
      </div>
      <p>Press here to type your message</p>
      <p>{transcript}</p>
      <Link to="/write">
        <img src={write} alt="write" className="icon"></img>
        <div>Write</div>
      </Link>
      <button id="send">Send</button>
      <Nav />;
    </div>
  );
}

export default Speak;
