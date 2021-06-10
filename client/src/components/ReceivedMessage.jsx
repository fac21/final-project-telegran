import React from "react";
import { Link, withRouter } from "react-router-dom";
import Avatar from "../images/profile.svg";
import { AppContainer } from "./Container.style";
import Nav from "./Navbar.jsx";
import { NavContainer } from "./Nav.style";
import { Button } from "./Button.style.js";

function ReceivedMessage(props) {
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
    <p>hi</p>
    // <div>
    //   <Button className="back-button">
    //     <a href="/messages" className="text-link">
    //       Go back
    //     </a>
    //   </Button>
    //   <AppContainer>
    //     <div className="parent">
    //       <img className="avatar" src={Avatar} alt="avatar"></img>
    //       <div className="time">{props.messageTime} </div>
    //       <div className="name">{props.messageName} </div>
    //       <div id="content" className="content">{props.messageContent} </div>
    //       <button onClick={sendEmoji}>👍 </button>
    //     </div>
    //   </AppContainer>
    //   <NavContainer>
    //     <Nav />
    //   </NavContainer>
    // </div>
  );
}

export default ReceivedMessage;
