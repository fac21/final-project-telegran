import React from "react";
import { Link, withRouter } from "react-router-dom";
import Avatar from "../images/profile.svg";
import { AppContainer } from "./Container.style";
import Nav from "./Navbar.jsx";
import { NavContainer } from "./Nav.style";
import { Button } from "./Button.style.js";
import { MessageHeading, StyledMessage } from "./Message.style";

function SingleMessage() {
  // const [emoji, setEmoji] = React.useState("");
  // function sendEmoji(event) {
  //   event.preventDefault();
  //   fetch("/api/write-message", {
  //     method: "POST",
  //     body: JSON.stringify({ emoji }),
  //     headers: { "content-type": "application/json" },
  //   })
  //     .then((response) => {
  //       response.json();
  //       return <Redirect to="/message-sent" />;
  //     })
  //     .catch((error) => console.error("Oops!", error));
  // }
  return (
    // <p>hi</p>
    <div>
      <Button className="back-button">
        <a href="/messages" className="text-link">
          Go back
        </a>
      </Button>
        <StyledMessage>
          <MessageHeading>
            {/* <div className="parent"> */}
              <img className="avatar" src={Avatar} alt="avatar"></img>
              <div className="time">Friday 10th June 2021 11:01 </div>
          <div className="name">Chisha </div>
          </MessageHeading>
            <div id="content" className="content">
              Hi Nan!
              Hope you’re ok. Looking forward to seeing you next week.
              Love from 
              Chisha xxx
            </div>
              {/* <button onClick={sendEmoji}>👍 </button> */}
            {/* </div> */}
            
          </StyledMessage>
      <NavContainer>
        <Nav />
      </NavContainer>
    </div>
  );
}

export default SingleMessage;
