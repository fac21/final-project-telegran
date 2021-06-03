import React from "react";
import cancel from "../images/cancelcross.svg";
import { Link, withRouter } from "react-router-dom";
import Nav from "./Navbar.jsx";
import { EmergencyContainer } from "./Emergency.style";

function Emergency() {
  return (
    <EmergencyContainer>
      <div>
        <p>Sending SOS in 10 seconds</p>
        <img src={cancel} alt="logo" />
        <button type="submit">
          {" "}
          <Link to="/welcome">Cancel SOS Call</Link>
        </button>
      </div>
      <Nav />
    </EmergencyContainer>
  );
}

export default Emergency;
