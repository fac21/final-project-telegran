import React from "react";
import cancel from "../images/cancelcross.svg";
import { Link, withRouter } from "react-router-dom";
import Nav from "./Navbar.jsx";
import { EmergencyContainer } from "./Emergency.style";
const fetch = require("node-fetch");
let timeout;

function Emergency() {
  const [timer, setTimer] = React.useState(10);

  React.useEffect(() => {
    timeout = setTimeout(() => {
      if (timer > 0) {
        setTimer(timer - 1);
      } else {
        displaySOS();
      }
    }, 1000);
  });

  function displaySOS() {
    // const message = event.target.message.value;
    const message = "SOS: Please call me";
    fetch("/api/slack", {
      method: "POST",
      body: JSON.stringify({ message }),
      headers: { "content-type": "application/json" },
    })
      .then((response) => {
        response.json();
      })
      .catch((error) => console.error("Oops!", error));
  }

  function stopTimer() {
    if (timer > 0) {
      clearTimeout(timeout);
    }
  }

  console.log(timer);
  return (
    <EmergencyContainer>
      <div>
        <p>
          Sending SOS in
          <span> {timer}</span> seconds
        </p>
        <img src={cancel} alt="logo" />
        <button type="submit">
          {" "}
          <Link to="/welcome" onClick={stopTimer}>
            Cancel SOS Call
          </Link>
        </button>
      </div>
      <Nav />
    </EmergencyContainer>
  );
}

export default Emergency;
