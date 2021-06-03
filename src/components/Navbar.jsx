import React, { useState } from "react";
import envelope from "../images/envelope.svg";
import sos from "../images/sos.svg";
import write from "../images/write.svg";
import "../global.css";
import { Link, withRouter } from "react-router-dom";

function Navbar(props) {
  return (
    <div className="nav">
      <Link to="/messages">
        <img src={envelope} alt="envelope" className="icon"></img>
        <div>Messages</div>
      </Link>
      <Link to="/write">
        <img src={write} alt="write" className="icon"></img>
        <div>Write</div>
      </Link>
      <Link to="/emergency">
        <img src={sos} alt="emergency" className="icon"></img>
        <div>Emergency</div>
      </Link>
    </div>
  );
}

export default Navbar;
