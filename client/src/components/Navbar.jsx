import React, { useState } from "react";
import envelope from "../images/envelope.svg";
import sos from "../images/sos.svg";
import write from "../images/write.svg";
import "../global.css";
import { Link, withRouter } from "react-router-dom";
import { NavContainer } from "./Nav.style.js";
import styled from "styled-components";

const linkStyle = {
  textDecoration: "none",
  fontFamily: "Epilogue",
};

function Navbar(props) {
  return (
    <NavContainer>
      <div className="nav">
        <Link to="/messages" style={linkStyle}>
          <img src={envelope} alt="envelope" className="icon"></img>
          <div>Messages</div>
        </Link>
        <Link to="/write" style={linkStyle}>
          <img src={write} alt="write" className="icon"></img>
          <div>Write</div>
        </Link>
        <Link to="/emergency" style={linkStyle}>
          <img src={sos} alt="emergency" className="icon"></img>
          <div>Emergency</div>
        </Link>
      </div>
    </NavContainer>
  );
}

export default Navbar;
