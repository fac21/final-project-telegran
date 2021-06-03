import React from "react";
import cancel from "../images/cancel-sos.svg";
import { Link, withRouter } from "react-router-dom";
import Nav from "./Navbar.jsx";

function Emergency() {
  return (
    <div>
      <div>
        <p>Sending SOS in 10 seconds</p>
        <img src={cancel} alt="logo" />
        <button type="submit">
          {" "}
          <Link to="/welcome">Cancel SOS Call</Link>
        </button>
      </div>
      <Nav />
    </div>
  );
}

export default Emergency;
