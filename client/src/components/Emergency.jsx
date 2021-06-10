import React from "react";
import cancel from "../images/cancelcross.svg";
import { Link, withRouter } from "react-router-dom";
import Nav from "./Navbar.jsx";
import { NavContainer } from "./Nav.style";
import { EmergencyContainer } from "./Emergency.style";
import sos from "../images/sos.svg";
import { Button } from "./Button.style.js";
const fetch = require("node-fetch");
let timeout;

function Emergency() {
  const [timer, setTimer] = React.useState(10);

  React.useEffect(() => {
    timeout = setTimeout(() => {
      if (timer > 0) {
        setTimer(timer - 1);
      } else {
        sendSOS();
      }
    }, 1000);
  });

  function sendSOS() {
    // const message = event.target.message.value;
    const message = "SOS: Please call me";
    fetch(`${process.env.REACT_APP_API_URL}/api/write-message`, {
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
    <div>
      <EmergencyContainer>
        <div className="sos-page">
          <p> Sending </p>
          <img src={sos} />
          <p>
            {" "}
            in
            <span> {timer} </span>
            seconds{" "}
          </p>
          <a onClick={stopTimer}><img src={cancel} alt="logo" /></a>
          <div>
            <Button type="submit">
              {" "}
              <Link to="/welcome" className="text-link" onClick={stopTimer}>
                Cancel SOS Call
              </Link>
            </Button>
          </div>
        </div>
      </EmergencyContainer>

      <NavContainer>
        <Nav />
      </NavContainer>
    </div>
  );
}

export default Emergency;
